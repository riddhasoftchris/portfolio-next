/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb
*/

import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export function Model() {

  const gltfPath = './model.glb';
  const gltfRef = useRef<any>();

  useEffect(() => {
    loader.load(gltfPath, (gltf) => {
      gltfRef.current = gltf.scene;
    }, (e) => { console.log('loaded') }, (err) => { console.log(err) });
  }, []);

  return (
    <group dispose={null}>
      {/* <primitive object={gltfRef.current} /> */}
      <primitive object={gltfRef.current?.nodes?.Hips} />
      <skinnedMesh geometry={gltfRef.current?.nodes?.Wolf3D_Body.geometry} material={gltfRef.current?.materials?.Wolf3D_Body} skeleton={gltfRef.current?.nodes?.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={gltfRef.current?.nodes?.Wolf3D_Outfit_Bottom.geometry} material={gltfRef.current?.materials?.Wolf3D_Outfit_Bottom} skeleton={gltfRef.current?.nodes?.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={gltfRef.current?.nodes?.Wolf3D_Outfit_Footwear.geometry} material={gltfRef.current?.materials?.Wolf3D_Outfit_Footwear} skeleton={gltfRef.current?.nodes?.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={gltfRef.current?.nodes?.Wolf3D_Outfit_Top.geometry} material={gltfRef.current?.materials?.Wolf3D_Outfit_Top} skeleton={gltfRef.current?.nodes?.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={gltfRef.current?.nodes?.Wolf3D_Hair.geometry} material={gltfRef.current?.materials?.Wolf3D_Hair} skeleton={gltfRef.current?.nodes?.Wolf3D_Hair.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={gltfRef.current?.nodes?.EyeLeft.geometry} material={gltfRef.current?.materials?.Wolf3D_Eye} skeleton={gltfRef.current?.nodes?.EyeLeft.skeleton} morphTargetDictionary={gltfRef.current?.nodes?.EyeLeft.morphTargetDictionary} morphTargetInfluences={gltfRef.current?.nodes?.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={gltfRef.current?.nodes?.EyeRight.geometry} material={gltfRef.current?.materials?.Wolf3D_Eye} skeleton={gltfRef.current?.nodes?.EyeRight.skeleton} morphTargetDictionary={gltfRef.current?.nodes?.EyeRight.morphTargetDictionary} morphTargetInfluences={gltfRef.current?.nodes?.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={gltfRef.current?.nodes?.Wolf3D_Head.geometry} material={gltfRef.current?.materials?.Wolf3D_Skin} skeleton={gltfRef.current?.nodes?.Wolf3D_Head.skeleton} morphTargetDictionary={gltfRef.current?.nodes?.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={gltfRef.current?.nodes?.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={gltfRef.current?.nodes?.Wolf3D_Teeth.geometry} material={gltfRef.current?.materials?.Wolf3D_Teeth} skeleton={gltfRef.current?.nodes?.Wolf3D_Teeth.skeleton} morphTargetDictionary={gltfRef.current?.nodes?.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={gltfRef.current?.nodes?.Wolf3D_Teeth.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Beard" geometry={gltfRef.current?.nodes?.Wolf3D_Beard.geometry} material={gltfRef.current?.materials?.Wolf3D_Beard} skeleton={gltfRef.current?.nodes?.Wolf3D_Beard.skeleton} morphTargetDictionary={gltfRef.current?.nodes?.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={gltfRef.current?.nodes?.Wolf3D_Beard.morphTargetInfluences} />
    </group>
  )
}