"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
attribute vec3 aPosition;
attribute vec3 aNormal;
uniform float uTime;
uniform float uScroll;
uniform float uAspect;
varying vec3 vNormal;
varying vec3 vPosition;
mat3 rotateX(float a) { float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,-s,0.,s,c); }
mat3 rotateY(float a) { float c=cos(a),s=sin(a);return mat3(c,0.,s,0.,1.,0.,-s,0.,c); }
mat3 rotateZ(float a) { float c=cos(a),s=sin(a);return mat3(c,-s,0.,s,c,0.,0.,0.,1.); }
void main(){
  mat3 rot=rotateY(-0.35 + uTime * .15 + uScroll*1.4)*rotateX(.28+uScroll*.55)*rotateZ(-.22);
  vec3 p=rot*aPosition;
  vNormal=normalize(rot*aNormal);
  vPosition=p;
  float perspective=2.4/(4.5-p.z);
  gl_Position=vec4(p.x*perspective/min(uAspect,1.0),p.y*perspective*min(uAspect,1.0),p.z*.13,1.0);
}
`;

const fragmentSource = `
precision mediump float;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;
void main(){
  vec3 n=normalize(vNormal);
  vec3 viewDir=normalize(vec3(0.,0.,3.6)-vPosition);
  vec3 key=normalize(vec3(-.6,.95,1.7));
  vec3 fill=normalize(vec3(1.2,-.5,.4));
  float diffuse=max(dot(n,key),0.0);
  float low=max(dot(n,fill),0.0);
  float gloss=pow(max(dot(reflect(-key,n),viewDir),0.0),48.0);
  float gloss2=pow(max(dot(reflect(-fill,n),viewDir),0.0),26.0);
  float fresnel=pow(1.0-max(dot(n,viewDir),0.0),2.3);
  vec3 shadow=vec3(.20,.09,.026);
  vec3 base=vec3(.57,.32,.105);
  vec3 light=vec3(1.0,.79,.39);
  vec3 gold=mix(shadow,base,.30+diffuse*.56);
  gold+=light*(gloss*.86+gloss2*.23+fresnel*.20);
  gold+=vec3(.24,.15,.045)*low;
  gl_FragColor=vec4(gold,1.0);
}
`;

function createKnot() {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const segments = 320;
  const sides = 12;
  const pos = (t: number) => {
    const q = 2 * t;
    const radial = 1.15 + .22 * Math.cos(3 * t);
    return [radial * Math.cos(q), .63 * Math.sin(3 * t), .78 * Math.sin(q)] as const;
  };
  for (let i = 0; i <= segments; i++) {
    const t = i / segments * Math.PI * 2;
    const p = pos(t);
    const ahead = pos(t + .001);
    const behind = pos(t - .001);
    const tangent = [ahead[0] - behind[0], ahead[1] - behind[1], ahead[2] - behind[2]];
    const len = Math.hypot(...tangent);
    const tx = tangent[0] / len, ty = tangent[1] / len, tz = tangent[2] / len;
    const sideA = [-ty, tx, 0];
    const aLen = Math.hypot(...sideA);
    const ax = sideA[0] / aLen, ay = sideA[1] / aLen;
    const bx = ty * 0 - tz * ay, by = tz * ax - tx * 0, bz = tx * ay - ty * ax;
    const radius = .15 + .036 * Math.sin(t * 5 + .9);
    for (let j = 0; j <= sides; j++) {
      const angle = j / sides * Math.PI * 2;
      const nx = ax * Math.cos(angle) + bx * Math.sin(angle);
      const ny = ay * Math.cos(angle) + by * Math.sin(angle);
      const nz = bz * Math.sin(angle);
      positions.push(p[0] + nx * radius, p[1] + ny * radius, p[2] + nz * radius);
      normals.push(nx, ny, nz);
      if (i < segments && j < sides) {
        const k = i * (sides + 1) + j;
        indices.push(k, k + sides + 1, k + 1, k + 1, k + sides + 1, k + sides + 2);
      }
    }
  }
  return { positions: new Float32Array(positions), normals: new Float32Array(normals), indices: new Uint16Array(indices) };
}

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/** A small, self-contained WebGL sculpture. No heavy engine downloaded on mobile. */
export default function GoldSculpture() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData) return;
    let disposed = false;
    let active = false;
    let frame = 0;
    let scrollValue = 0;
    const contextState = { gl: null as WebGLRenderingContext | null };
    let start = 0;

    const initialize = () => {
      if (disposed || contextState.gl) return;
      const ctx = canvas.getContext("webgl", { alpha: true, antialias: true, depth: true, powerPreference: "low-power" });
      if (!ctx) return;
      const vs = createShader(ctx, ctx.VERTEX_SHADER, vertexSource);
      const fs = createShader(ctx, ctx.FRAGMENT_SHADER, fragmentSource);
      if (!vs || !fs) return;
      const program = ctx.createProgram();
      if (!program) return;
      ctx.attachShader(program, vs);
      ctx.attachShader(program, fs);
      ctx.linkProgram(program);
      if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) return;
      ctx.useProgram(program);
      const knot = createKnot();
      function bufferAttribute(name: string, data: Float32Array) {
        const buffer = ctx!.createBuffer();
        ctx!.bindBuffer(ctx!.ARRAY_BUFFER, buffer);
        ctx!.bufferData(ctx!.ARRAY_BUFFER, data, ctx!.STATIC_DRAW);
        const location = ctx!.getAttribLocation(program!, name);
        if (location < 0) return;
        ctx!.enableVertexAttribArray(location);
        ctx!.vertexAttribPointer(location, 3, ctx!.FLOAT, false, 0, 0);
      }
      bufferAttribute("aPosition", knot.positions);
      bufferAttribute("aNormal", knot.normals);
      const element = ctx.createBuffer();
      ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, element);
      ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER, knot.indices, ctx.STATIC_DRAW);
      const timeUniform = ctx.getUniformLocation(program, "uTime");
      const scrollUniform = ctx.getUniformLocation(program, "uScroll");
      const aspectUniform = ctx.getUniformLocation(program, "uAspect");
      ctx.enable(ctx.DEPTH_TEST);
      ctx.clearColor(0, 0, 0, 0);
      contextState.gl = ctx;
      const render = (timestamp: number) => {
        frame = 0;
        if (disposed || !active || document.hidden) return;
        if (!start) start = timestamp;
        const rect = canvas.getBoundingClientRect();
        const dpr = Math.min(1.5, window.devicePixelRatio || 1);
        const width = Math.min(900, Math.max(1, Math.round(rect.width * dpr)));
        const height = Math.min(900, Math.max(1, Math.round(rect.height * dpr)));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          ctx.viewport(0, 0, width, height);
        }
        ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
        ctx.uniform1f(timeUniform, (timestamp - start) / 1000);
        ctx.uniform1f(scrollUniform, scrollValue);
        ctx.uniform1f(aspectUniform, width / height);
        ctx.drawElements(ctx.TRIANGLES, knot.indices.length, ctx.UNSIGNED_SHORT, 0);
        frame = requestAnimationFrame(render);
      };
      (canvas as HTMLCanvasElement & { resumeScene?: () => void }).resumeScene = () => {
        if (!frame && active && !document.hidden) frame = requestAnimationFrame(render);
      };
    };

    const onScroll = () => {
      if (!active) return;
      const section = canvas.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      scrollValue = Math.max(-1, Math.min(1, (window.innerHeight * .5 - (rect.top + rect.height / 2)) / window.innerHeight));
    };
    const observer = new IntersectionObserver((entries) => {
      active = entries[0]?.isIntersecting ?? false;
      if (active) {
        initialize();
        onScroll();
        (canvas as HTMLCanvasElement & { resumeScene?: () => void }).resumeScene?.();
      } else if (frame) { cancelAnimationFrame(frame); frame = 0; }
    }, { rootMargin: "180px 0px" });
    const onVisibility = () => {
      if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; }
      else (canvas as HTMLCanvasElement & { resumeScene?: () => void }).resumeScene?.();
    };
    observer.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      if (frame) cancelAnimationFrame(frame);
      contextState.gl?.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);
  return <canvas ref={ref} className="sculpture-canvas" aria-hidden="true" />;
}
