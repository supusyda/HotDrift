var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointSpring' )
  var i605 = data
  i604.spring = i605[0]
  i604.damper = i605[1]
  i604.targetPosition = i605[2]
  return i604
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointMotor' )
  var i607 = data
  i606.m_TargetVelocity = i607[0]
  i606.m_Force = i607[1]
  i606.m_FreeSpin = i607[2]
  return i606
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointLimits' )
  var i609 = data
  i608.m_Min = i609[0]
  i608.m_Max = i609[1]
  i608.m_Bounciness = i609[2]
  i608.m_BounceMinVelocity = i609[3]
  i608.m_ContactDistance = i609[4]
  i608.minBounce = i609[5]
  i608.maxBounce = i609[6]
  return i608
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointDrive' )
  var i611 = data
  i610.m_PositionSpring = i611[0]
  i610.m_PositionDamper = i611[1]
  i610.m_MaximumForce = i611[2]
  i610.m_UseAcceleration = i611[3]
  return i610
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i613 = data
  i612.m_Spring = i613[0]
  i612.m_Damper = i613[1]
  return i612
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i615 = data
  i614.m_Limit = i615[0]
  i614.m_Bounciness = i615[1]
  i614.m_ContactDistance = i615[2]
  return i614
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i617 = data
  i616.m_ExtremumSlip = i617[0]
  i616.m_ExtremumValue = i617[1]
  i616.m_AsymptoteSlip = i617[2]
  i616.m_AsymptoteValue = i617[3]
  i616.m_Stiffness = i617[4]
  return i616
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i619 = data
  i618.m_LowerAngle = i619[0]
  i618.m_UpperAngle = i619[1]
  return i618
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i621 = data
  i620.m_MotorSpeed = i621[0]
  i620.m_MaximumMotorTorque = i621[1]
  return i620
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i623 = data
  i622.m_DampingRatio = i623[0]
  i622.m_Frequency = i623[1]
  i622.m_Angle = i623[2]
  return i622
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i625 = data
  i624.m_LowerTranslation = i625[0]
  i624.m_UpperTranslation = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i627 = data
  i626.name = i627[0]
  i626.halfPrecision = !!i627[1]
  i626.useUInt32IndexFormat = !!i627[2]
  i626.vertexCount = i627[3]
  i626.aabb = i627[4]
  var i629 = i627[5]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( !!i629[i + 0] );
  }
  i626.streams = i628
  i626.vertices = i627[6]
  var i631 = i627[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i631[i + 0]) );
  }
  i626.subMeshes = i630
  var i633 = i627[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 16) {
    i632.push( new pc.Mat4().setData(i633[i + 0], i633[i + 1], i633[i + 2], i633[i + 3],  i633[i + 4], i633[i + 5], i633[i + 6], i633[i + 7],  i633[i + 8], i633[i + 9], i633[i + 10], i633[i + 11],  i633[i + 12], i633[i + 13], i633[i + 14], i633[i + 15]) );
  }
  i626.bindposes = i632
  var i635 = i627[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i635[i + 0]) );
  }
  i626.blendShapes = i634
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i641 = data
  i640.triangles = i641[0]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i647 = data
  i646.name = i647[0]
  var i649 = i647[1]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i649[i + 0]) );
  }
  i646.frames = i648
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i650 = root || new pc.UnityMaterial()
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'shader')
  i650.renderQueue = i651[3]
  i650.enableInstancing = !!i651[4]
  var i653 = i651[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i653[i + 0]) );
  }
  i650.floatParameters = i652
  var i655 = i651[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i655[i + 0]) );
  }
  i650.colorParameters = i654
  var i657 = i651[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i657[i + 0]) );
  }
  i650.vectorParameters = i656
  var i659 = i651[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i659[i + 0]) );
  }
  i650.textureParameters = i658
  var i661 = i651[9]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i661[i + 0]) );
  }
  i650.materialFlags = i660
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = new pc.Color(i669[1], i669[2], i669[3], i669[4])
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = new pc.Vec4( i673[1], i673[2], i673[3], i673[4] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'value')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i681 = data
  i680.name = i681[0]
  i680.enabled = !!i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i683 = data
  i682.position = new pc.Vec3( i683[0], i683[1], i683[2] )
  i682.scale = new pc.Vec3( i683[3], i683[4], i683[5] )
  i682.rotation = new pc.Quat(i683[6], i683[7], i683[8], i683[9])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i685 = data
  i684.playAutomatically = !!i685[0]
  request.r(i685[1], i685[2], 0, i684, 'clip')
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.clips = i686
  i684.wrapMode = i685[4]
  i684.enabled = !!i685[5]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'sharedMesh')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'additionalVertexStreams')
  i692.enabled = !!i693[2]
  request.r(i693[3], i693[4], 0, i692, 'sharedMaterial')
  var i695 = i693[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[6]
  i692.shadowCastingMode = i693[7]
  i692.sortingLayerID = i693[8]
  i692.sortingOrder = i693[9]
  i692.lightmapIndex = i693[10]
  i692.lightmapSceneIndex = i693[11]
  i692.lightmapScaleOffset = new pc.Vec4( i693[12], i693[13], i693[14], i693[15] )
  i692.lightProbeUsage = i693[16]
  i692.reflectionProbeUsage = i693[17]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i699 = data
  i698.name = i699[0]
  i698.tagId = i699[1]
  i698.enabled = !!i699[2]
  i698.isStatic = !!i699[3]
  i698.layer = i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i701 = data
  i700.name = i701[0]
  i700.width = i701[1]
  i700.height = i701[2]
  i700.mipmapCount = i701[3]
  i700.anisoLevel = i701[4]
  i700.filterMode = i701[5]
  i700.hdr = !!i701[6]
  i700.format = i701[7]
  i700.wrapMode = i701[8]
  i700.alphaIsTransparency = !!i701[9]
  i700.alphaSource = i701[10]
  i700.graphicsFormat = i701[11]
  i700.sRGBTexture = !!i701[12]
  i700.desiredColorSpace = i701[13]
  i700.wrapU = i701[14]
  i700.wrapV = i701[15]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i703 = data
  i702.pivot = new pc.Vec2( i703[0], i703[1] )
  i702.anchorMin = new pc.Vec2( i703[2], i703[3] )
  i702.anchorMax = new pc.Vec2( i703[4], i703[5] )
  i702.sizeDelta = new pc.Vec2( i703[6], i703[7] )
  i702.anchoredPosition3D = new pc.Vec3( i703[8], i703[9], i703[10] )
  i702.rotation = new pc.Quat(i703[11], i703[12], i703[13], i703[14])
  i702.scale = new pc.Vec3( i703[15], i703[16], i703[17] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i705 = data
  i704.cullTransparentMesh = !!i705[0]
  return i704
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Image' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_Sprite')
  i706.m_Type = i707[2]
  i706.m_PreserveAspect = !!i707[3]
  i706.m_FillCenter = !!i707[4]
  i706.m_FillMethod = i707[5]
  i706.m_FillAmount = i707[6]
  i706.m_FillClockwise = !!i707[7]
  i706.m_FillOrigin = i707[8]
  i706.m_UseSpriteMesh = !!i707[9]
  i706.m_PixelsPerUnitMultiplier = i707[10]
  request.r(i707[11], i707[12], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[13]
  i706.m_Color = new pc.Color(i707[14], i707[15], i707[16], i707[17])
  i706.m_RaycastTarget = !!i707[18]
  i706.m_RaycastPadding = new pc.Vec4( i707[19], i707[20], i707[21], i707[22] )
  return i706
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i708 = root || request.c( 'FixedJoystick' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'background')
  i708.handleRange = i709[2]
  i708.deadZone = i709[3]
  i708.axisOptions = i709[4]
  i708.snapX = !!i709[5]
  i708.snapY = !!i709[6]
  request.r(i709[7], i709[8], 0, i708, 'stickHandle')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i711 = data
  i710.name = i711[0]
  i710.atlasId = i711[1]
  i710.mipmapCount = i711[2]
  i710.hdr = !!i711[3]
  i710.size = i711[4]
  i710.anisoLevel = i711[5]
  i710.filterMode = i711[6]
  var i713 = i711[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 4) {
    i712.push( UnityEngine.Rect.MinMaxRect(i713[i + 0], i713[i + 1], i713[i + 2], i713[i + 3]) );
  }
  i710.rects = i712
  i710.wrapU = i711[8]
  i710.wrapV = i711[9]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i717 = data
  i716.name = i717[0]
  i716.index = i717[1]
  i716.startup = !!i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.aspect = i719[1]
  i718.orthographic = !!i719[2]
  i718.orthographicSize = i719[3]
  i718.backgroundColor = new pc.Color(i719[4], i719[5], i719[6], i719[7])
  i718.nearClipPlane = i719[8]
  i718.farClipPlane = i719[9]
  i718.fieldOfView = i719[10]
  i718.depth = i719[11]
  i718.clearFlags = i719[12]
  i718.cullingMask = i719[13]
  i718.rect = i719[14]
  request.r(i719[15], i719[16], 0, i718, 'targetTexture')
  i718.usePhysicalProperties = !!i719[17]
  i718.focalLength = i719[18]
  i718.sensorSize = new pc.Vec2( i719[19], i719[20] )
  i718.lensShift = new pc.Vec2( i719[21], i719[22] )
  i718.gateFit = i719[23]
  return i718
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i720 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i721 = data
  i720.m_ShowDebugText = !!i721[0]
  i720.m_ShowCameraFrustum = !!i721[1]
  i720.m_IgnoreTimeScale = !!i721[2]
  request.r(i721[3], i721[4], 0, i720, 'm_WorldUpOverride')
  i720.m_UpdateMethod = i721[5]
  i720.m_BlendUpdateMethod = i721[6]
  i720.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i721[7], i720.m_DefaultBlend)
  request.r(i721[8], i721[9], 0, i720, 'm_CustomBlends')
  i720.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i721[10], i720.m_CameraCutEvent)
  i720.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i721[11], i720.m_CameraActivatedEvent)
  return i720
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i722 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i723 = data
  i722.m_Style = i723[0]
  i722.m_Time = i723[1]
  i722.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i723[2] } )
  return i722
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i724 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i725 = data
  i724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i725[0], i724.m_PersistentCalls)
  return i724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('UnityEngine.Events.PersistentCall', i729[i + 0]));
  }
  i726.m_Calls = i728
  return i726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Target')
  i732.m_TargetAssemblyTypeName = i733[2]
  i732.m_MethodName = i733[3]
  i732.m_Mode = i733[4]
  i732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i733[5], i732.m_Arguments)
  i732.m_CallState = i733[6]
  return i732
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i734 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i735 = data
  i734.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i735[0], i734.m_PersistentCalls)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.type = i737[1]
  i736.color = new pc.Color(i737[2], i737[3], i737[4], i737[5])
  i736.cullingMask = i737[6]
  i736.intensity = i737[7]
  i736.range = i737[8]
  i736.spotAngle = i737[9]
  i736.shadows = i737[10]
  i736.shadowNormalBias = i737[11]
  i736.shadowBias = i737[12]
  i736.shadowStrength = i737[13]
  i736.shadowResolution = i737[14]
  i736.lightmapBakeType = i737[15]
  i736.renderMode = i737[16]
  request.r(i737[17], i737[18], 0, i736, 'cookie')
  i736.cookieSize = i737[19]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.isTrigger = !!i739[1]
  request.r(i739[2], i739[3], 0, i738, 'material')
  request.r(i739[4], i739[5], 0, i738, 'sharedMesh')
  i738.convex = !!i739[6]
  return i738
}

Deserializers["CarController"] = function (request, data, root) {
  var i740 = root || request.c( 'CarController' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'sphereCollider')
  request.r(i741[2], i741[3], 0, i740, 'sphereRB')
  i740.isDriffing = !!i741[4]
  request.r(i741[5], i741[6], 0, i740, 'CarBody')
  i740.Gravity = i741[7]
  i740.MaxSpeed = i741[8]
  i740.MaxAngleToDrift = i741[9]
  i740.MaxSteerAngle = i741[10]
  i740.SteerSensitivity = i741[11]
  i740.DriftTraction = i741[12]
  i740.FrictionNormal = i741[13]
  i740.DriftFriction = i741[14]
  var i743 = i741[15]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i740.wheelParticlesHolder = i742
  var i745 = i741[16]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 1, i744, '')
  }
  i740.trailRenderHolder = i744
  request.r(i741[17], i741[18], 0, i740, 'carAudio')
  request.r(i741[19], i741[20], 0, i740, 'NormalPlayerCarData')
  request.r(i741[21], i741[22], 0, i740, 'AICarData')
  return i740
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i748 = root || request.c( 'PlayerController' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'fixedJoystick')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i751 = data
  i750.enabled = !!i751[0]
  request.r(i751[1], i751[2], 0, i750, 'sharedMaterial')
  var i753 = i751[3]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.sharedMaterials = i752
  i750.receiveShadows = !!i751[4]
  i750.shadowCastingMode = i751[5]
  i750.sortingLayerID = i751[6]
  i750.sortingOrder = i751[7]
  i750.lightmapIndex = i751[8]
  i750.lightmapSceneIndex = i751[9]
  i750.lightmapScaleOffset = new pc.Vec4( i751[10], i751[11], i751[12], i751[13] )
  i750.lightProbeUsage = i751[14]
  i750.reflectionProbeUsage = i751[15]
  var i755 = i751[16]
  var i754 = []
  for(var i = 0; i < i755.length; i += 3) {
    i754.push( new pc.Vec3( i755[i + 0], i755[i + 1], i755[i + 2] ) );
  }
  i750.positions = i754
  i750.positionCount = i751[17]
  i750.time = i751[18]
  i750.startWidth = i751[19]
  i750.endWidth = i751[20]
  i750.widthMultiplier = i751[21]
  i750.autodestruct = !!i751[22]
  i750.emitting = !!i751[23]
  i750.numCornerVertices = i751[24]
  i750.numCapVertices = i751[25]
  i750.minVertexDistance = i751[26]
  i750.colorGradient = i751[27] ? new pc.ColorGradient(i751[27][0], i751[27][1], i751[27][2]) : null
  i750.startColor = new pc.Color(i751[28], i751[29], i751[30], i751[31])
  i750.endColor = new pc.Color(i751[32], i751[33], i751[34], i751[35])
  i750.generateLightingData = !!i751[36]
  i750.textureMode = i751[37]
  i750.alignment = i751[38]
  i750.widthCurve = new pc.AnimationCurve( { keys_flow: i751[39] } )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i759 = data
  i758.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i759[0], i758.main)
  i758.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i759[1], i758.colorBySpeed)
  i758.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i759[2], i758.colorOverLifetime)
  i758.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i759[3], i758.emission)
  i758.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i759[4], i758.rotationBySpeed)
  i758.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i759[5], i758.rotationOverLifetime)
  i758.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i759[6], i758.shape)
  i758.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i759[7], i758.sizeBySpeed)
  i758.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i759[8], i758.sizeOverLifetime)
  i758.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i759[9], i758.textureSheetAnimation)
  i758.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i759[10], i758.velocityOverLifetime)
  i758.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i759[11], i758.noise)
  i758.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i759[12], i758.inheritVelocity)
  i758.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i759[13], i758.forceOverLifetime)
  i758.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i759[14], i758.limitVelocityOverLifetime)
  i758.useAutoRandomSeed = !!i759[15]
  i758.randomSeed = i759[16]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemMain()
  var i761 = data
  i760.duration = i761[0]
  i760.loop = !!i761[1]
  i760.prewarm = !!i761[2]
  i760.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.startDelay)
  i760.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.startLifetime)
  i760.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.startSpeed)
  i760.startSize3D = !!i761[6]
  i760.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.startSizeX)
  i760.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.startSizeY)
  i760.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.startSizeZ)
  i760.startRotation3D = !!i761[10]
  i760.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.startRotationX)
  i760.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[12], i760.startRotationY)
  i760.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[13], i760.startRotationZ)
  i760.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i761[14], i760.startColor)
  i760.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[15], i760.gravityModifier)
  i760.simulationSpace = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'customSimulationSpace')
  i760.simulationSpeed = i761[19]
  i760.useUnscaledTime = !!i761[20]
  i760.scalingMode = i761[21]
  i760.playOnAwake = !!i761[22]
  i760.maxParticles = i761[23]
  i760.emitterVelocityMode = i761[24]
  i760.stopAction = i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxCurve()
  var i763 = data
  i762.mode = i763[0]
  i762.curveMin = new pc.AnimationCurve( { keys_flow: i763[1] } )
  i762.curveMax = new pc.AnimationCurve( { keys_flow: i763[2] } )
  i762.curveMultiplier = i763[3]
  i762.constantMin = i763[4]
  i762.constantMax = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxGradient()
  var i765 = data
  i764.mode = i765[0]
  i764.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[1], i764.gradientMin)
  i764.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i765[2], i764.gradientMax)
  i764.colorMin = new pc.Color(i765[3], i765[4], i765[5], i765[6])
  i764.colorMax = new pc.Color(i765[7], i765[8], i765[9], i765[10])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i767 = data
  i766.mode = i767[0]
  var i769 = i767[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i769[i + 0]) );
  }
  i766.colorKeys = i768
  var i771 = i767[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i771[i + 0]) );
  }
  i766.alphaKeys = i770
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemColorBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[1], i772.color)
  i772.range = new pc.Vec2( i773[2], i773[3] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i777 = data
  i776.color = new pc.Color(i777[0], i777[1], i777[2], i777[3])
  i776.time = i777[4]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i781 = data
  i780.alpha = i781[0]
  i780.time = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemEmitter()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.rateOverTime)
  i784.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.rateOverDistance)
  var i787 = i785[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i787[i + 0]) );
  }
  i784.bursts = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemBurst()
  var i791 = data
  i790.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[0], i790.count)
  i790.cycleCount = i791[1]
  i790.minCount = i791[2]
  i790.maxCount = i791[3]
  i790.repeatInterval = i791[4]
  i790.time = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  i792.range = new pc.Vec2( i793[5], i793[6] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemShape()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.shapeType = i797[1]
  i796.randomDirectionAmount = i797[2]
  i796.sphericalDirectionAmount = i797[3]
  i796.randomPositionAmount = i797[4]
  i796.alignToDirection = !!i797[5]
  i796.radius = i797[6]
  i796.radiusMode = i797[7]
  i796.radiusSpread = i797[8]
  i796.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[9], i796.radiusSpeed)
  i796.radiusThickness = i797[10]
  i796.angle = i797[11]
  i796.length = i797[12]
  i796.boxThickness = new pc.Vec3( i797[13], i797[14], i797[15] )
  i796.meshShapeType = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'mesh')
  request.r(i797[19], i797[20], 0, i796, 'meshRenderer')
  request.r(i797[21], i797[22], 0, i796, 'skinnedMeshRenderer')
  i796.useMeshMaterialIndex = !!i797[23]
  i796.meshMaterialIndex = i797[24]
  i796.useMeshColors = !!i797[25]
  i796.normalOffset = i797[26]
  i796.arc = i797[27]
  i796.arcMode = i797[28]
  i796.arcSpread = i797[29]
  i796.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[30], i796.arcSpeed)
  i796.donutRadius = i797[31]
  i796.position = new pc.Vec3( i797[32], i797[33], i797[34] )
  i796.rotation = new pc.Vec3( i797[35], i797[36], i797[37] )
  i796.scale = new pc.Vec3( i797[38], i797[39], i797[40] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.mode = i803[1]
  i802.animation = i803[2]
  i802.numTilesX = i803[3]
  i802.numTilesY = i803[4]
  i802.useRandomRow = !!i803[5]
  i802.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[6], i802.frameOverTime)
  i802.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.startFrame)
  i802.cycleCount = i803[8]
  i802.rowIndex = i803[9]
  i802.flipU = i803[10]
  i802.flipV = i803[11]
  i802.spriteCount = i803[12]
  var i805 = i803[13]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sprites = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.radial)
  i808.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[5], i808.speedModifier)
  i808.space = i809[6]
  i808.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.orbitalX)
  i808.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.orbitalY)
  i808.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.orbitalZ)
  i808.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[10], i808.orbitalOffsetX)
  i808.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.orbitalOffsetY)
  i808.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[12], i808.orbitalOffsetZ)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemNoise()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.separateAxes = !!i811[1]
  i810.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.strengthX)
  i810.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.strengthY)
  i810.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.strengthZ)
  i810.frequency = i811[5]
  i810.damping = !!i811[6]
  i810.octaveCount = i811[7]
  i810.octaveMultiplier = i811[8]
  i810.octaveScale = i811[9]
  i810.quality = i811[10]
  i810.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.scrollSpeed)
  i810.scrollSpeedMultiplier = i811[12]
  i810.remapEnabled = !!i811[13]
  i810.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[14], i810.remapX)
  i810.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[15], i810.remapY)
  i810.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[16], i810.remapZ)
  i810.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[17], i810.positionAmount)
  i810.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[18], i810.rotationAmount)
  i810.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[19], i810.sizeAmount)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemInheritVelocity()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.mode = i813[1]
  i812.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.curve)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemForceOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.space = i815[4]
  i814.randomized = !!i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.limit)
  i816.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.limitX)
  i816.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.limitY)
  i816.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.limitZ)
  i816.dampen = i817[5]
  i816.separateAxes = !!i817[6]
  i816.space = i817[7]
  i816.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.drag)
  i816.multiplyDragByParticleSize = !!i817[9]
  i816.multiplyDragByParticleVelocity = !!i817[10]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i819 = data
  i818.enabled = !!i819[0]
  request.r(i819[1], i819[2], 0, i818, 'sharedMaterial')
  var i821 = i819[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.sharedMaterials = i820
  i818.receiveShadows = !!i819[4]
  i818.shadowCastingMode = i819[5]
  i818.sortingLayerID = i819[6]
  i818.sortingOrder = i819[7]
  i818.lightmapIndex = i819[8]
  i818.lightmapSceneIndex = i819[9]
  i818.lightmapScaleOffset = new pc.Vec4( i819[10], i819[11], i819[12], i819[13] )
  i818.lightProbeUsage = i819[14]
  i818.reflectionProbeUsage = i819[15]
  request.r(i819[16], i819[17], 0, i818, 'mesh')
  i818.meshCount = i819[18]
  i818.activeVertexStreamsCount = i819[19]
  i818.alignment = i819[20]
  i818.renderMode = i819[21]
  i818.sortMode = i819[22]
  i818.lengthScale = i819[23]
  i818.velocityScale = i819[24]
  i818.cameraVelocityScale = i819[25]
  i818.normalDirection = i819[26]
  i818.sortingFudge = i819[27]
  i818.minParticleSize = i819[28]
  i818.maxParticleSize = i819[29]
  i818.pivot = new pc.Vec3( i819[30], i819[31], i819[32] )
  request.r(i819[33], i819[34], 0, i818, 'trailMaterial')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'clip')
  request.r(i823[2], i823[3], 0, i822, 'outputAudioMixerGroup')
  i822.playOnAwake = !!i823[4]
  i822.loop = !!i823[5]
  i822.time = i823[6]
  i822.volume = i823[7]
  i822.pitch = i823[8]
  i822.enabled = !!i823[9]
  return i822
}

Deserializers["CarAudio"] = function (request, data, root) {
  var i824 = root || request.c( 'CarAudio' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'engineSound')
  request.r(i825[2], i825[3], 0, i824, 'driftSound')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i827 = data
  i826.enabled = !!i827[0]
  i826.isTrigger = !!i827[1]
  request.r(i827[2], i827[3], 0, i826, 'material')
  i826.center = new pc.Vec3( i827[4], i827[5], i827[6] )
  i826.radius = i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i829 = data
  i828.mass = i829[0]
  i828.drag = i829[1]
  i828.angularDrag = i829[2]
  i828.useGravity = !!i829[3]
  i828.isKinematic = !!i829[4]
  i828.constraints = i829[5]
  i828.maxAngularVelocity = i829[6]
  i828.collisionDetectionMode = i829[7]
  i828.interpolation = i829[8]
  return i828
}

Deserializers["AIPathController"] = function (request, data, root) {
  var i830 = root || request.c( 'AIPathController' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'pathHolder')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i833 = data
  i832.center = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.size = new pc.Vec3( i833[3], i833[4], i833[5] )
  i832.enabled = !!i833[6]
  i832.isTrigger = !!i833[7]
  request.r(i833[8], i833[9], 0, i832, 'material')
  return i832
}

Deserializers["FinishLineColider"] = function (request, data, root) {
  var i834 = root || request.c( 'FinishLineColider' )
  var i835 = data
  return i834
}

Deserializers["GameManager"] = function (request, data, root) {
  var i836 = root || request.c( 'GameManager' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'cinemachineCamera')
  request.r(i837[2], i837[3], 0, i836, 'playerCar')
  request.r(i837[4], i837[5], 0, i836, 'aiCar')
  i836.playerCarType = i837[6]
  i836.CustomSpeedPlayer = i837[7]
  i836.CustomMaxAngleToDriftPlayer = i837[8]
  i836.CustomSteerSensitivityPlayer = i837[9]
  i836.CustomDriftTractionPlayer = i837[10]
  i836.aiCarType = i837[11]
  i836.CustomSpeedAI = i837[12]
  i836.CustomMaxAngleToDriftAI = i837[13]
  i836.CustomSteerSensitivityAI = i837[14]
  i836.CustomDriftTractionAI = i837[15]
  return i836
}

Deserializers["MoveAndHide"] = function (request, data, root) {
  var i838 = root || request.c( 'MoveAndHide' )
  var i839 = data
  i838.targetPosition = new pc.Vec3( i839[0], i839[1], i839[2] )
  i838.moveDuration = i839[3]
  i838.fadeDuration = i839[4]
  i838.delayBetween = i839[5]
  request.r(i839[6], i839[7], 0, i838, 'particle')
  return i838
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TextMeshPro' )
  var i841 = data
  i840._SortingLayer = i841[0]
  i840._SortingLayerID = i841[1]
  i840._SortingOrder = i841[2]
  i840.m_hasFontAssetChanged = !!i841[3]
  request.r(i841[4], i841[5], 0, i840, 'm_renderer')
  i840.m_maskType = i841[6]
  i840.m_text = i841[7]
  i840.m_isRightToLeft = !!i841[8]
  request.r(i841[9], i841[10], 0, i840, 'm_fontAsset')
  request.r(i841[11], i841[12], 0, i840, 'm_sharedMaterial')
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.m_fontSharedMaterials = i842
  request.r(i841[14], i841[15], 0, i840, 'm_fontMaterial')
  var i845 = i841[16]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i840.m_fontMaterials = i844
  i840.m_fontColor32 = UnityEngine.Color32.ConstructColor(i841[17], i841[18], i841[19], i841[20])
  i840.m_fontColor = new pc.Color(i841[21], i841[22], i841[23], i841[24])
  i840.m_enableVertexGradient = !!i841[25]
  i840.m_colorMode = i841[26]
  i840.m_fontColorGradient = request.d('TMPro.VertexGradient', i841[27], i840.m_fontColorGradient)
  request.r(i841[28], i841[29], 0, i840, 'm_fontColorGradientPreset')
  request.r(i841[30], i841[31], 0, i840, 'm_spriteAsset')
  i840.m_tintAllSprites = !!i841[32]
  request.r(i841[33], i841[34], 0, i840, 'm_StyleSheet')
  i840.m_TextStyleHashCode = i841[35]
  i840.m_overrideHtmlColors = !!i841[36]
  i840.m_faceColor = UnityEngine.Color32.ConstructColor(i841[37], i841[38], i841[39], i841[40])
  i840.m_fontSize = i841[41]
  i840.m_fontSizeBase = i841[42]
  i840.m_fontWeight = i841[43]
  i840.m_enableAutoSizing = !!i841[44]
  i840.m_fontSizeMin = i841[45]
  i840.m_fontSizeMax = i841[46]
  i840.m_fontStyle = i841[47]
  i840.m_HorizontalAlignment = i841[48]
  i840.m_VerticalAlignment = i841[49]
  i840.m_textAlignment = i841[50]
  i840.m_characterSpacing = i841[51]
  i840.m_wordSpacing = i841[52]
  i840.m_lineSpacing = i841[53]
  i840.m_lineSpacingMax = i841[54]
  i840.m_paragraphSpacing = i841[55]
  i840.m_charWidthMaxAdj = i841[56]
  i840.m_enableWordWrapping = !!i841[57]
  i840.m_wordWrappingRatios = i841[58]
  i840.m_overflowMode = i841[59]
  request.r(i841[60], i841[61], 0, i840, 'm_linkedTextComponent')
  request.r(i841[62], i841[63], 0, i840, 'parentLinkedComponent')
  i840.m_enableKerning = !!i841[64]
  i840.m_enableExtraPadding = !!i841[65]
  i840.checkPaddingRequired = !!i841[66]
  i840.m_isRichText = !!i841[67]
  i840.m_parseCtrlCharacters = !!i841[68]
  i840.m_isOrthographic = !!i841[69]
  i840.m_isCullingEnabled = !!i841[70]
  i840.m_horizontalMapping = i841[71]
  i840.m_verticalMapping = i841[72]
  i840.m_uvLineOffset = i841[73]
  i840.m_geometrySortingOrder = i841[74]
  i840.m_IsTextObjectScaleStatic = !!i841[75]
  i840.m_VertexBufferAutoSizeReduction = !!i841[76]
  i840.m_useMaxVisibleDescender = !!i841[77]
  i840.m_pageToDisplay = i841[78]
  i840.m_margin = new pc.Vec4( i841[79], i841[80], i841[81], i841[82] )
  i840.m_isUsingLegacyAnimationComponent = !!i841[83]
  i840.m_isVolumetricText = !!i841[84]
  request.r(i841[85], i841[86], 0, i840, 'm_Material')
  i840.m_Maskable = !!i841[87]
  i840.m_Color = new pc.Color(i841[88], i841[89], i841[90], i841[91])
  i840.m_RaycastTarget = !!i841[92]
  i840.m_RaycastPadding = new pc.Vec4( i841[93], i841[94], i841[95], i841[96] )
  return i840
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.VertexGradient' )
  var i847 = data
  i846.topLeft = new pc.Color(i847[0], i847[1], i847[2], i847[3])
  i846.topRight = new pc.Color(i847[4], i847[5], i847[6], i847[7])
  i846.bottomLeft = new pc.Color(i847[8], i847[9], i847[10], i847[11])
  i846.bottomRight = new pc.Color(i847[12], i847[13], i847[14], i847[15])
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.planeDistance = i849[1]
  i848.referencePixelsPerUnit = i849[2]
  i848.isFallbackOverlay = !!i849[3]
  i848.renderMode = i849[4]
  i848.renderOrder = i849[5]
  i848.sortingLayerName = i849[6]
  i848.sortingOrder = i849[7]
  i848.scaleFactor = i849[8]
  request.r(i849[9], i849[10], 0, i848, 'worldCamera')
  i848.overrideSorting = !!i849[11]
  i848.pixelPerfect = !!i849[12]
  i848.targetDisplay = i849[13]
  i848.overridePixelPerfect = !!i849[14]
  return i848
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i851 = data
  i850.m_UiScaleMode = i851[0]
  i850.m_ReferencePixelsPerUnit = i851[1]
  i850.m_ScaleFactor = i851[2]
  i850.m_ReferenceResolution = new pc.Vec2( i851[3], i851[4] )
  i850.m_ScreenMatchMode = i851[5]
  i850.m_MatchWidthOrHeight = i851[6]
  i850.m_PhysicalUnit = i851[7]
  i850.m_FallbackScreenDPI = i851[8]
  i850.m_DefaultSpriteDPI = i851[9]
  i850.m_DynamicPixelsPerUnit = i851[10]
  i850.m_PresetInfoIsWorld = !!i851[11]
  return i850
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i853 = data
  i852.m_IgnoreReversedGraphics = !!i853[0]
  i852.m_BlockingObjects = i853[1]
  i852.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i853[2] )
  return i852
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button' )
  var i855 = data
  i854.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i855[0], i854.m_OnClick)
  i854.m_Navigation = request.d('UnityEngine.UI.Navigation', i855[1], i854.m_Navigation)
  i854.m_Transition = i855[2]
  i854.m_Colors = request.d('UnityEngine.UI.ColorBlock', i855[3], i854.m_Colors)
  i854.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i855[4], i854.m_SpriteState)
  i854.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i855[5], i854.m_AnimationTriggers)
  i854.m_Interactable = !!i855[6]
  request.r(i855[7], i855[8], 0, i854, 'm_TargetGraphic')
  return i854
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i857 = data
  i856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i857[0], i856.m_PersistentCalls)
  return i856
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i859 = data
  i858.m_Mode = i859[0]
  i858.m_WrapAround = !!i859[1]
  request.r(i859[2], i859[3], 0, i858, 'm_SelectOnUp')
  request.r(i859[4], i859[5], 0, i858, 'm_SelectOnDown')
  request.r(i859[6], i859[7], 0, i858, 'm_SelectOnLeft')
  request.r(i859[8], i859[9], 0, i858, 'm_SelectOnRight')
  return i858
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i861 = data
  i860.m_NormalColor = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  i860.m_HighlightedColor = new pc.Color(i861[4], i861[5], i861[6], i861[7])
  i860.m_PressedColor = new pc.Color(i861[8], i861[9], i861[10], i861[11])
  i860.m_SelectedColor = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  i860.m_DisabledColor = new pc.Color(i861[16], i861[17], i861[18], i861[19])
  i860.m_ColorMultiplier = i861[20]
  i860.m_FadeDuration = i861[21]
  return i860
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_HighlightedSprite')
  request.r(i863[2], i863[3], 0, i862, 'm_PressedSprite')
  request.r(i863[4], i863[5], 0, i862, 'm_SelectedSprite')
  request.r(i863[6], i863[7], 0, i862, 'm_DisabledSprite')
  return i862
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i865 = data
  i864.m_NormalTrigger = i865[0]
  i864.m_HighlightedTrigger = i865[1]
  i864.m_PressedTrigger = i865[2]
  i864.m_SelectedTrigger = i865[3]
  i864.m_DisabledTrigger = i865[4]
  return i864
}

Deserializers["BtnReset"] = function (request, data, root) {
  var i866 = root || request.c( 'BtnReset' )
  var i867 = data
  return i866
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i869 = data
  i868.m_hasFontAssetChanged = !!i869[0]
  request.r(i869[1], i869[2], 0, i868, 'm_baseMaterial')
  i868.m_maskOffset = new pc.Vec4( i869[3], i869[4], i869[5], i869[6] )
  i868.m_text = i869[7]
  i868.m_isRightToLeft = !!i869[8]
  request.r(i869[9], i869[10], 0, i868, 'm_fontAsset')
  request.r(i869[11], i869[12], 0, i868, 'm_sharedMaterial')
  var i871 = i869[13]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.m_fontSharedMaterials = i870
  request.r(i869[14], i869[15], 0, i868, 'm_fontMaterial')
  var i873 = i869[16]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i868.m_fontMaterials = i872
  i868.m_fontColor32 = UnityEngine.Color32.ConstructColor(i869[17], i869[18], i869[19], i869[20])
  i868.m_fontColor = new pc.Color(i869[21], i869[22], i869[23], i869[24])
  i868.m_enableVertexGradient = !!i869[25]
  i868.m_colorMode = i869[26]
  i868.m_fontColorGradient = request.d('TMPro.VertexGradient', i869[27], i868.m_fontColorGradient)
  request.r(i869[28], i869[29], 0, i868, 'm_fontColorGradientPreset')
  request.r(i869[30], i869[31], 0, i868, 'm_spriteAsset')
  i868.m_tintAllSprites = !!i869[32]
  request.r(i869[33], i869[34], 0, i868, 'm_StyleSheet')
  i868.m_TextStyleHashCode = i869[35]
  i868.m_overrideHtmlColors = !!i869[36]
  i868.m_faceColor = UnityEngine.Color32.ConstructColor(i869[37], i869[38], i869[39], i869[40])
  i868.m_fontSize = i869[41]
  i868.m_fontSizeBase = i869[42]
  i868.m_fontWeight = i869[43]
  i868.m_enableAutoSizing = !!i869[44]
  i868.m_fontSizeMin = i869[45]
  i868.m_fontSizeMax = i869[46]
  i868.m_fontStyle = i869[47]
  i868.m_HorizontalAlignment = i869[48]
  i868.m_VerticalAlignment = i869[49]
  i868.m_textAlignment = i869[50]
  i868.m_characterSpacing = i869[51]
  i868.m_wordSpacing = i869[52]
  i868.m_lineSpacing = i869[53]
  i868.m_lineSpacingMax = i869[54]
  i868.m_paragraphSpacing = i869[55]
  i868.m_charWidthMaxAdj = i869[56]
  i868.m_enableWordWrapping = !!i869[57]
  i868.m_wordWrappingRatios = i869[58]
  i868.m_overflowMode = i869[59]
  request.r(i869[60], i869[61], 0, i868, 'm_linkedTextComponent')
  request.r(i869[62], i869[63], 0, i868, 'parentLinkedComponent')
  i868.m_enableKerning = !!i869[64]
  i868.m_enableExtraPadding = !!i869[65]
  i868.checkPaddingRequired = !!i869[66]
  i868.m_isRichText = !!i869[67]
  i868.m_parseCtrlCharacters = !!i869[68]
  i868.m_isOrthographic = !!i869[69]
  i868.m_isCullingEnabled = !!i869[70]
  i868.m_horizontalMapping = i869[71]
  i868.m_verticalMapping = i869[72]
  i868.m_uvLineOffset = i869[73]
  i868.m_geometrySortingOrder = i869[74]
  i868.m_IsTextObjectScaleStatic = !!i869[75]
  i868.m_VertexBufferAutoSizeReduction = !!i869[76]
  i868.m_useMaxVisibleDescender = !!i869[77]
  i868.m_pageToDisplay = i869[78]
  i868.m_margin = new pc.Vec4( i869[79], i869[80], i869[81], i869[82] )
  i868.m_isUsingLegacyAnimationComponent = !!i869[83]
  i868.m_isVolumetricText = !!i869[84]
  request.r(i869[85], i869[86], 0, i868, 'm_Material')
  i868.m_Maskable = !!i869[87]
  i868.m_Color = new pc.Color(i869[88], i869[89], i869[90], i869[91])
  i868.m_RaycastTarget = !!i869[92]
  i868.m_RaycastPadding = new pc.Vec4( i869[93], i869[94], i869[95], i869[96] )
  return i868
}

Deserializers["LunaJoystick"] = function (request, data, root) {
  var i874 = root || request.c( 'LunaJoystick' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'joystickBackground')
  request.r(i875[2], i875[3], 0, i874, 'joystickHandle')
  i874.moveSpeed = i875[4]
  i874.inputVector = new pc.Vec2( i875[5], i875[6] )
  return i874
}

Deserializers["GameOverPanel"] = function (request, data, root) {
  var i876 = root || request.c( 'GameOverPanel' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'gameOverPanel')
  return i876
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_FirstSelected')
  i878.m_sendNavigationEvents = !!i879[2]
  i878.m_DragThreshold = i879[3]
  return i878
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i881 = data
  i880.m_MoveRepeatDelay = i881[0]
  i880.m_MoveRepeatRate = i881[1]
  request.r(i881[2], i881[3], 0, i880, 'm_XRTrackingOrigin')
  request.r(i881[4], i881[5], 0, i880, 'm_ActionsAsset')
  request.r(i881[6], i881[7], 0, i880, 'm_PointAction')
  request.r(i881[8], i881[9], 0, i880, 'm_MoveAction')
  request.r(i881[10], i881[11], 0, i880, 'm_SubmitAction')
  request.r(i881[12], i881[13], 0, i880, 'm_CancelAction')
  request.r(i881[14], i881[15], 0, i880, 'm_LeftClickAction')
  request.r(i881[16], i881[17], 0, i880, 'm_MiddleClickAction')
  request.r(i881[18], i881[19], 0, i880, 'm_RightClickAction')
  request.r(i881[20], i881[21], 0, i880, 'm_ScrollWheelAction')
  request.r(i881[22], i881[23], 0, i880, 'm_TrackedDevicePositionAction')
  request.r(i881[24], i881[25], 0, i880, 'm_TrackedDeviceOrientationAction')
  i880.m_DeselectOnBackgroundClick = !!i881[26]
  i880.m_PointerBehavior = i881[27]
  i880.m_CursorLockBehavior = i881[28]
  i880.m_ScrollDeltaPerTick = i881[29]
  i880.m_SendPointerHoverToParent = !!i881[30]
  return i880
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i882 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_LookAt')
  request.r(i883[2], i883[3], 0, i882, 'm_Follow')
  i882.m_Lens = request.d('Cinemachine.LensSettings', i883[4], i882.m_Lens)
  i882.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i883[5], i882.m_Transitions)
  var i885 = i883[6]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i882.m_ExcludedPropertiesInInspector = i884
  var i887 = i883[7]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.m_LockStageInInspector = i886
  i882.m_Priority = i883[8]
  i882.m_StandbyUpdate = i883[9]
  i882.m_LegacyBlendHint = i883[10]
  request.r(i883[11], i883[12], 0, i882, 'm_ComponentOwner')
  i882.m_StreamingVersion = i883[13]
  return i882
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Cinemachine.LensSettings' )
  var i889 = data
  i888.FieldOfView = i889[0]
  i888.OrthographicSize = i889[1]
  i888.NearClipPlane = i889[2]
  i888.FarClipPlane = i889[3]
  i888.Dutch = i889[4]
  i888.ModeOverride = i889[5]
  i888.LensShift = new pc.Vec2( i889[6], i889[7] )
  i888.GateFit = i889[8]
  i888.FocusDistance = i889[9]
  i888.m_SensorSize = new pc.Vec2( i889[10], i889[11] )
  return i888
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i890 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i891 = data
  i890.m_BlendHint = i891[0]
  i890.m_InheritPosition = !!i891[1]
  i890.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i891[2], i890.m_OnCameraLive)
  return i890
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i896 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i897 = data
  return i896
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i898 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i899 = data
  i898.m_BindingMode = i899[0]
  i898.m_FollowOffset = new pc.Vec3( i899[1], i899[2], i899[3] )
  i898.m_XDamping = i899[4]
  i898.m_YDamping = i899[5]
  i898.m_ZDamping = i899[6]
  i898.m_AngularDampingMode = i899[7]
  i898.m_PitchDamping = i899[8]
  i898.m_YawDamping = i899[9]
  i898.m_RollDamping = i899[10]
  i898.m_AngularDamping = i899[11]
  return i898
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i900 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i901 = data
  i900.m_TrackedObjectOffset = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.m_LookaheadTime = i901[3]
  i900.m_LookaheadSmoothing = i901[4]
  i900.m_LookaheadIgnoreY = !!i901[5]
  i900.m_HorizontalDamping = i901[6]
  i900.m_VerticalDamping = i901[7]
  i900.m_ScreenX = i901[8]
  i900.m_ScreenY = i901[9]
  i900.m_DeadZoneWidth = i901[10]
  i900.m_DeadZoneHeight = i901[11]
  i900.m_SoftZoneWidth = i901[12]
  i900.m_SoftZoneHeight = i901[13]
  i900.m_BiasX = i901[14]
  i900.m_BiasY = i901[15]
  i900.m_CenterOnActivate = !!i901[16]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i903 = data
  i902.ambientIntensity = i903[0]
  i902.reflectionIntensity = i903[1]
  i902.ambientMode = i903[2]
  i902.ambientLight = new pc.Color(i903[3], i903[4], i903[5], i903[6])
  i902.ambientSkyColor = new pc.Color(i903[7], i903[8], i903[9], i903[10])
  i902.ambientGroundColor = new pc.Color(i903[11], i903[12], i903[13], i903[14])
  i902.ambientEquatorColor = new pc.Color(i903[15], i903[16], i903[17], i903[18])
  i902.fogColor = new pc.Color(i903[19], i903[20], i903[21], i903[22])
  i902.fogEndDistance = i903[23]
  i902.fogStartDistance = i903[24]
  i902.fogDensity = i903[25]
  i902.fog = !!i903[26]
  request.r(i903[27], i903[28], 0, i902, 'skybox')
  i902.fogMode = i903[29]
  var i905 = i903[30]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i905[i + 0]) );
  }
  i902.lightmaps = i904
  i902.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i903[31], i902.lightProbes)
  i902.lightmapsMode = i903[32]
  i902.mixedBakeMode = i903[33]
  i902.environmentLightingMode = i903[34]
  i902.ambientProbe = new pc.SphericalHarmonicsL2(i903[35])
  i902.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i903[36])
  i902.useReferenceAmbientProbe = !!i903[37]
  request.r(i903[38], i903[39], 0, i902, 'customReflection')
  request.r(i903[40], i903[41], 0, i902, 'defaultReflection')
  i902.defaultReflectionMode = i903[42]
  i902.defaultReflectionResolution = i903[43]
  i902.sunLightObjectId = i903[44]
  i902.pixelLightCount = i903[45]
  i902.defaultReflectionHDR = !!i903[46]
  i902.hasLightDataAsset = !!i903[47]
  i902.hasManualGenerate = !!i903[48]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'lightmapColor')
  request.r(i909[2], i909[3], 0, i908, 'lightmapDirection')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i910 = root || new UnityEngine.LightProbes()
  var i911 = data
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i919[i + 0]));
  }
  i916.ShaderCompilationErrors = i918
  i916.name = i917[1]
  i916.guid = i917[2]
  var i921 = i917[3]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.shaderDefinedKeywords = i920
  var i923 = i917[4]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i923[i + 0]) );
  }
  i916.passes = i922
  var i925 = i917[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i925[i + 0]) );
  }
  i916.usePasses = i924
  var i927 = i917[6]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i927[i + 0]) );
  }
  i916.defaultParameterValues = i926
  request.r(i917[7], i917[8], 0, i916, 'unityFallbackShader')
  i916.readDepth = !!i917[9]
  i916.isCreatedByShaderGraph = !!i917[10]
  i916.usedBatchUniforms = i917[11]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i931 = data
  i930.shaderName = i931[0]
  i930.errorMessage = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i934 = root || new pc.UnityShaderPass()
  var i935 = data
  i934.id = i935[0]
  i934.subShaderIndex = i935[1]
  i934.name = i935[2]
  i934.passType = i935[3]
  i934.grabPassTextureName = i935[4]
  i934.usePass = !!i935[5]
  i934.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[6], i934.zTest)
  i934.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[7], i934.zWrite)
  i934.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[8], i934.culling)
  i934.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i935[9], i934.blending)
  i934.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i935[10], i934.alphaBlending)
  i934.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[11], i934.colorWriteMask)
  i934.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[12], i934.offsetUnits)
  i934.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[13], i934.offsetFactor)
  i934.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[14], i934.stencilRef)
  i934.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[15], i934.stencilReadMask)
  i934.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[16], i934.stencilWriteMask)
  i934.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i935[17], i934.stencilOp)
  i934.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i935[18], i934.stencilOpFront)
  i934.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i935[19], i934.stencilOpBack)
  var i937 = i935[20]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i937[i + 0]) );
  }
  i934.tags = i936
  var i939 = i935[21]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.passDefinedKeywords = i938
  var i941 = i935[22]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i941[i + 0]) );
  }
  i934.passDefinedKeywordGroups = i940
  var i943 = i935[23]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i943[i + 0]) );
  }
  i934.variants = i942
  var i945 = i935[24]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i945[i + 0]) );
  }
  i934.excludedVariants = i944
  i934.hasDepthReader = !!i935[25]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i947 = data
  i946.val = i947[0]
  i946.name = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i949 = data
  i948.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[0], i948.src)
  i948.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[1], i948.dst)
  i948.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[2], i948.op)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i951 = data
  i950.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[0], i950.pass)
  i950.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[1], i950.fail)
  i950.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[2], i950.zFail)
  i950.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[3], i950.comp)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i955 = data
  i954.name = i955[0]
  i954.value = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i958.keywords = i960
  i958.hasDiscard = !!i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i965 = data
  i964.passId = i965[0]
  i964.subShaderIndex = i965[1]
  var i967 = i965[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i964.keywords = i966
  i964.vertexProgram = i965[3]
  i964.fragmentProgram = i965[4]
  i964.compiledForWebGL2 = !!i965[5]
  i964.readDepth = !!i965[6]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'shader')
  i970.pass = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i975 = data
  i974.name = i975[0]
  i974.type = i975[1]
  i974.value = new pc.Vec4( i975[2], i975[3], i975[4], i975[5] )
  i974.textureValue = i975[6]
  i974.shaderPropertyFlag = i975[7]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i977 = data
  i976.name = i977[0]
  request.r(i977[1], i977[2], 0, i976, 'texture')
  i976.aabb = i977[3]
  i976.vertices = i977[4]
  i976.triangles = i977[5]
  i976.textureRect = UnityEngine.Rect.MinMaxRect(i977[6], i977[7], i977[8], i977[9])
  i976.packedRect = UnityEngine.Rect.MinMaxRect(i977[10], i977[11], i977[12], i977[13])
  i976.border = new pc.Vec4( i977[14], i977[15], i977[16], i977[17] )
  i976.transparency = i977[18]
  i976.bounds = i977[19]
  i976.pixelsPerUnit = i977[20]
  i976.textureWidth = i977[21]
  i976.textureHeight = i977[22]
  i976.nativeSize = new pc.Vec2( i977[23], i977[24] )
  i976.pivot = new pc.Vec2( i977[25], i977[26] )
  i976.textureRectOffset = new pc.Vec2( i977[27], i977[28] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i979 = data
  i978.name = i979[0]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i981 = data
  i980.name = i981[0]
  i980.ascent = i981[1]
  i980.originalLineHeight = i981[2]
  i980.fontSize = i981[3]
  var i983 = i981[4]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i983[i + 0]) );
  }
  i980.characterInfo = i982
  request.r(i981[5], i981[6], 0, i980, 'texture')
  i980.originalFontSize = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i987 = data
  i986.index = i987[0]
  i986.advance = i987[1]
  i986.bearing = i987[2]
  i986.glyphWidth = i987[3]
  i986.glyphHeight = i987[4]
  i986.minX = i987[5]
  i986.maxX = i987[6]
  i986.minY = i987[7]
  i986.maxY = i987[8]
  i986.uvBottomLeftX = i987[9]
  i986.uvBottomLeftY = i987[10]
  i986.uvBottomRightX = i987[11]
  i986.uvBottomRightY = i987[12]
  i986.uvTopLeftX = i987[13]
  i986.uvTopLeftY = i987[14]
  i986.uvTopRightX = i987[15]
  i986.uvTopRightY = i987[16]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i989 = data
  i988.name = i989[0]
  i988.bytes64 = i989[1]
  i988.data = i989[2]
  return i988
}

Deserializers["CarData"] = function (request, data, root) {
  var i990 = root || request.c( 'CarData' )
  var i991 = data
  i990.Gravity = i991[0]
  i990.MaxSpeed = i991[1]
  i990.MaxAngleToDrift = i991[2]
  i990.MaxSteerAngle = i991[3]
  i990.SteerSensitivity = i991[4]
  i990.DriftTraction = i991[5]
  i990.FrictionNormal = i991[6]
  i990.DriftFriction = i991[7]
  return i990
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i993 = data
  i992.hashCode = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'material')
  i992.materialHashCode = i993[3]
  request.r(i993[4], i993[5], 0, i992, 'atlas')
  i992.normalStyle = i993[6]
  i992.normalSpacingOffset = i993[7]
  i992.boldStyle = i993[8]
  i992.boldSpacing = i993[9]
  i992.italicStyle = i993[10]
  i992.tabSize = i993[11]
  i992.m_Version = i993[12]
  i992.m_SourceFontFileGUID = i993[13]
  request.r(i993[14], i993[15], 0, i992, 'm_SourceFontFile_EditorRef')
  request.r(i993[16], i993[17], 0, i992, 'm_SourceFontFile')
  i992.m_AtlasPopulationMode = i993[18]
  i992.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i993[19], i992.m_FaceInfo)
  var i995 = i993[20]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('UnityEngine.TextCore.Glyph', i995[i + 0]));
  }
  i992.m_GlyphTable = i994
  var i997 = i993[21]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.TMP_Character', i997[i + 0]));
  }
  i992.m_CharacterTable = i996
  var i999 = i993[22]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i992.m_AtlasTextures = i998
  i992.m_AtlasTextureIndex = i993[23]
  i992.m_IsMultiAtlasTexturesEnabled = !!i993[24]
  i992.m_ClearDynamicDataOnBuild = !!i993[25]
  var i1001 = i993[26]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('UnityEngine.TextCore.GlyphRect', i1001[i + 0]));
  }
  i992.m_UsedGlyphRects = i1000
  var i1003 = i993[27]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('UnityEngine.TextCore.GlyphRect', i1003[i + 0]));
  }
  i992.m_FreeGlyphRects = i1002
  i992.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i993[28], i992.m_fontInfo)
  i992.m_AtlasWidth = i993[29]
  i992.m_AtlasHeight = i993[30]
  i992.m_AtlasPadding = i993[31]
  i992.m_AtlasRenderMode = i993[32]
  var i1005 = i993[33]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Glyph', i1005[i + 0]));
  }
  i992.m_glyphInfoList = i1004
  i992.m_KerningTable = request.d('TMPro.KerningTable', i993[34], i992.m_KerningTable)
  i992.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i993[35], i992.m_FontFeatureTable)
  var i1007 = i993[36]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i992.fallbackFontAssets = i1006
  var i1009 = i993[37]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i992.m_FallbackFontAssetTable = i1008
  i992.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i993[38], i992.m_CreationSettings)
  var i1011 = i993[39]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('TMPro.TMP_FontWeightPair', i1011[i + 0]) );
  }
  i992.m_FontWeightTable = i1010
  var i1013 = i993[40]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('TMPro.TMP_FontWeightPair', i1013[i + 0]) );
  }
  i992.fontWeights = i1012
  return i992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1015 = data
  i1014.m_FaceIndex = i1015[0]
  i1014.m_FamilyName = i1015[1]
  i1014.m_StyleName = i1015[2]
  i1014.m_PointSize = i1015[3]
  i1014.m_Scale = i1015[4]
  i1014.m_UnitsPerEM = i1015[5]
  i1014.m_LineHeight = i1015[6]
  i1014.m_AscentLine = i1015[7]
  i1014.m_CapLine = i1015[8]
  i1014.m_MeanLine = i1015[9]
  i1014.m_Baseline = i1015[10]
  i1014.m_DescentLine = i1015[11]
  i1014.m_SuperscriptOffset = i1015[12]
  i1014.m_SuperscriptSize = i1015[13]
  i1014.m_SubscriptOffset = i1015[14]
  i1014.m_SubscriptSize = i1015[15]
  i1014.m_UnderlineOffset = i1015[16]
  i1014.m_UnderlineThickness = i1015[17]
  i1014.m_StrikethroughOffset = i1015[18]
  i1014.m_StrikethroughThickness = i1015[19]
  i1014.m_TabWidth = i1015[20]
  return i1014
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1019 = data
  i1018.m_Index = i1019[0]
  i1018.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1019[1], i1018.m_Metrics)
  i1018.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1019[2], i1018.m_GlyphRect)
  i1018.m_Scale = i1019[3]
  i1018.m_AtlasIndex = i1019[4]
  i1018.m_ClassDefinitionType = i1019[5]
  return i1018
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1021 = data
  i1020.m_Width = i1021[0]
  i1020.m_Height = i1021[1]
  i1020.m_HorizontalBearingX = i1021[2]
  i1020.m_HorizontalBearingY = i1021[3]
  i1020.m_HorizontalAdvance = i1021[4]
  return i1020
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1023 = data
  i1022.m_X = i1023[0]
  i1022.m_Y = i1023[1]
  i1022.m_Width = i1023[2]
  i1022.m_Height = i1023[3]
  return i1022
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_Character' )
  var i1027 = data
  i1026.m_ElementType = i1027[0]
  i1026.m_Unicode = i1027[1]
  i1026.m_GlyphIndex = i1027[2]
  i1026.m_Scale = i1027[3]
  return i1026
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1033 = data
  i1032.Name = i1033[0]
  i1032.PointSize = i1033[1]
  i1032.Scale = i1033[2]
  i1032.CharacterCount = i1033[3]
  i1032.LineHeight = i1033[4]
  i1032.Baseline = i1033[5]
  i1032.Ascender = i1033[6]
  i1032.CapHeight = i1033[7]
  i1032.Descender = i1033[8]
  i1032.CenterLine = i1033[9]
  i1032.SuperscriptOffset = i1033[10]
  i1032.SubscriptOffset = i1033[11]
  i1032.SubSize = i1033[12]
  i1032.Underline = i1033[13]
  i1032.UnderlineThickness = i1033[14]
  i1032.strikethrough = i1033[15]
  i1032.strikethroughThickness = i1033[16]
  i1032.TabWidth = i1033[17]
  i1032.Padding = i1033[18]
  i1032.AtlasWidth = i1033[19]
  i1032.AtlasHeight = i1033[20]
  return i1032
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1037 = data
  i1036.id = i1037[0]
  i1036.x = i1037[1]
  i1036.y = i1037[2]
  i1036.width = i1037[3]
  i1036.height = i1037[4]
  i1036.xOffset = i1037[5]
  i1036.yOffset = i1037[6]
  i1036.xAdvance = i1037[7]
  i1036.scale = i1037[8]
  return i1036
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.KerningTable' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('TMPro.KerningPair', i1041[i + 0]));
  }
  i1038.kerningPairs = i1040
  return i1038
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.KerningPair' )
  var i1045 = data
  i1044.xOffset = i1045[0]
  i1044.m_FirstGlyph = i1045[1]
  i1044.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1045[2], i1044.m_FirstGlyphAdjustments)
  i1044.m_SecondGlyph = i1045[3]
  i1044.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1045[4], i1044.m_SecondGlyphAdjustments)
  i1044.m_IgnoreSpacingAdjustments = !!i1045[5]
  return i1044
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1049[i + 0]));
  }
  i1046.m_GlyphPairAdjustmentRecords = i1048
  return i1046
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1053 = data
  i1052.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1053[0], i1052.m_FirstAdjustmentRecord)
  i1052.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1053[1], i1052.m_SecondAdjustmentRecord)
  i1052.m_FeatureLookupFlags = i1053[2]
  return i1052
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1055 = data
  i1054.m_GlyphIndex = i1055[0]
  i1054.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1055[1], i1054.m_GlyphValueRecord)
  return i1054
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1057 = data
  i1056.m_XPlacement = i1057[0]
  i1056.m_YPlacement = i1057[1]
  i1056.m_XAdvance = i1057[2]
  i1056.m_YAdvance = i1057[3]
  return i1056
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1061 = data
  i1060.sourceFontFileName = i1061[0]
  i1060.sourceFontFileGUID = i1061[1]
  i1060.pointSizeSamplingMode = i1061[2]
  i1060.pointSize = i1061[3]
  i1060.padding = i1061[4]
  i1060.packingMode = i1061[5]
  i1060.atlasWidth = i1061[6]
  i1060.atlasHeight = i1061[7]
  i1060.characterSetSelectionMode = i1061[8]
  i1060.characterSequence = i1061[9]
  i1060.referencedFontAssetGUID = i1061[10]
  i1060.referencedTextAssetGUID = i1061[11]
  i1060.fontStyle = i1061[12]
  i1060.fontStyleModifier = i1061[13]
  i1060.renderMode = i1061[14]
  i1060.includeFontFeatures = !!i1061[15]
  return i1060
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'regularTypeface')
  request.r(i1065[2], i1065[3], 0, i1064, 'italicTypeface')
  return i1064
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('UnityEngine.InputSystem.InputActionMap', i1069[i + 0]) );
  }
  i1066.m_ActionMaps = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1071[i + 0]) );
  }
  i1066.m_ControlSchemes = i1070
  i1066.m_IsProjectWide = !!i1067[2]
  return i1066
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1075 = data
  i1074.m_Name = i1075[0]
  i1074.m_Id = i1075[1]
  request.r(i1075[2], i1075[3], 0, i1074, 'm_Asset')
  var i1077 = i1075[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('UnityEngine.InputSystem.InputAction', i1077[i + 0]) );
  }
  i1074.m_Actions = i1076
  var i1079 = i1075[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('UnityEngine.InputSystem.InputBinding', i1079[i + 0]) );
  }
  i1074.m_Bindings = i1078
  return i1074
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1083 = data
  i1082.m_Name = i1083[0]
  i1082.m_Type = i1083[1]
  i1082.m_ExpectedControlType = i1083[2]
  i1082.m_Id = i1083[3]
  i1082.m_Processors = i1083[4]
  i1082.m_Interactions = i1083[5]
  var i1085 = i1083[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('UnityEngine.InputSystem.InputBinding', i1085[i + 0]) );
  }
  i1082.m_SingletonActionBindings = i1084
  i1082.m_Flags = i1083[7]
  return i1082
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1089 = data
  i1088.m_Name = i1089[0]
  i1088.m_Id = i1089[1]
  i1088.m_Path = i1089[2]
  i1088.m_Interactions = i1089[3]
  i1088.m_Processors = i1089[4]
  i1088.m_Groups = i1089[5]
  i1088.m_Action = i1089[6]
  i1088.m_Flags = i1089[7]
  return i1088
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1093 = data
  i1092.m_Name = i1093[0]
  i1092.m_BindingGroup = i1093[1]
  var i1095 = i1093[2]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1095[i + 0]) );
  }
  i1092.m_DeviceRequirements = i1094
  return i1092
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1099 = data
  i1098.m_ControlPath = i1099[0]
  i1098.m_Flags = i1099[1]
  return i1098
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'm_Asset')
  i1100.m_ActionId = i1101[2]
  return i1100
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1103 = data
  i1102.useSafeMode = !!i1103[0]
  i1102.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1103[1], i1102.safeModeOptions)
  i1102.timeScale = i1103[2]
  i1102.unscaledTimeScale = i1103[3]
  i1102.useSmoothDeltaTime = !!i1103[4]
  i1102.maxSmoothUnscaledTime = i1103[5]
  i1102.rewindCallbackMode = i1103[6]
  i1102.showUnityEditorReport = !!i1103[7]
  i1102.logBehaviour = i1103[8]
  i1102.drawGizmos = !!i1103[9]
  i1102.defaultRecyclable = !!i1103[10]
  i1102.defaultAutoPlay = i1103[11]
  i1102.defaultUpdateType = i1103[12]
  i1102.defaultTimeScaleIndependent = !!i1103[13]
  i1102.defaultEaseType = i1103[14]
  i1102.defaultEaseOvershootOrAmplitude = i1103[15]
  i1102.defaultEasePeriod = i1103[16]
  i1102.defaultAutoKill = !!i1103[17]
  i1102.defaultLoopType = i1103[18]
  i1102.debugMode = !!i1103[19]
  i1102.debugStoreTargetId = !!i1103[20]
  i1102.showPreviewPanel = !!i1103[21]
  i1102.storeSettingsLocation = i1103[22]
  i1102.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1103[23], i1102.modules)
  i1102.createASMDEF = !!i1103[24]
  i1102.showPlayingTweens = !!i1103[25]
  i1102.showPausedTweens = !!i1103[26]
  return i1102
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1104 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1105 = data
  i1104.logBehaviour = i1105[0]
  i1104.nestedTweenFailureBehaviour = i1105[1]
  return i1104
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1106 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1107 = data
  i1106.showPanel = !!i1107[0]
  i1106.audioEnabled = !!i1107[1]
  i1106.physicsEnabled = !!i1107[2]
  i1106.physics2DEnabled = !!i1107[3]
  i1106.spriteEnabled = !!i1107[4]
  i1106.uiEnabled = !!i1107[5]
  i1106.textMeshProEnabled = !!i1107[6]
  i1106.tk2DEnabled = !!i1107[7]
  i1106.deAudioEnabled = !!i1107[8]
  i1106.deUnityExtendedEnabled = !!i1107[9]
  i1106.epoOutlineEnabled = !!i1107[10]
  return i1106
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_Settings' )
  var i1109 = data
  i1108.m_enableWordWrapping = !!i1109[0]
  i1108.m_enableKerning = !!i1109[1]
  i1108.m_enableExtraPadding = !!i1109[2]
  i1108.m_enableTintAllSprites = !!i1109[3]
  i1108.m_enableParseEscapeCharacters = !!i1109[4]
  i1108.m_EnableRaycastTarget = !!i1109[5]
  i1108.m_GetFontFeaturesAtRuntime = !!i1109[6]
  i1108.m_missingGlyphCharacter = i1109[7]
  i1108.m_warningsDisabled = !!i1109[8]
  request.r(i1109[9], i1109[10], 0, i1108, 'm_defaultFontAsset')
  i1108.m_defaultFontAssetPath = i1109[11]
  i1108.m_defaultFontSize = i1109[12]
  i1108.m_defaultAutoSizeMinRatio = i1109[13]
  i1108.m_defaultAutoSizeMaxRatio = i1109[14]
  i1108.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1109[15], i1109[16] )
  i1108.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1109[17], i1109[18] )
  i1108.m_autoSizeTextContainer = !!i1109[19]
  i1108.m_IsTextObjectScaleStatic = !!i1109[20]
  var i1111 = i1109[21]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1108.m_fallbackFontAssets = i1110
  i1108.m_matchMaterialPreset = !!i1109[22]
  request.r(i1109[23], i1109[24], 0, i1108, 'm_defaultSpriteAsset')
  i1108.m_defaultSpriteAssetPath = i1109[25]
  i1108.m_enableEmojiSupport = !!i1109[26]
  i1108.m_MissingCharacterSpriteUnicode = i1109[27]
  i1108.m_defaultColorGradientPresetsPath = i1109[28]
  request.r(i1109[29], i1109[30], 0, i1108, 'm_defaultStyleSheet')
  i1108.m_StyleSheetsResourcePath = i1109[31]
  request.r(i1109[32], i1109[33], 0, i1108, 'm_leadingCharacters')
  request.r(i1109[34], i1109[35], 0, i1108, 'm_followingCharacters')
  i1108.m_UseModernHangulLineBreakingRules = !!i1109[36]
  return i1108
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1113 = data
  i1112.hashCode = i1113[0]
  request.r(i1113[1], i1113[2], 0, i1112, 'material')
  i1112.materialHashCode = i1113[3]
  request.r(i1113[4], i1113[5], 0, i1112, 'spriteSheet')
  var i1115 = i1113[6]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('TMPro.TMP_Sprite', i1115[i + 0]));
  }
  i1112.spriteInfoList = i1114
  var i1117 = i1113[7]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1112.fallbackSpriteAssets = i1116
  i1112.m_Version = i1113[8]
  i1112.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1113[9], i1112.m_FaceInfo)
  var i1119 = i1113[10]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('TMPro.TMP_SpriteCharacter', i1119[i + 0]));
  }
  i1112.m_SpriteCharacterTable = i1118
  var i1121 = i1113[11]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_SpriteGlyph', i1121[i + 0]));
  }
  i1112.m_SpriteGlyphTable = i1120
  return i1112
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.hashCode = i1125[1]
  i1124.unicode = i1125[2]
  i1124.pivot = new pc.Vec2( i1125[3], i1125[4] )
  request.r(i1125[5], i1125[6], 0, i1124, 'sprite')
  i1124.id = i1125[7]
  i1124.x = i1125[8]
  i1124.y = i1125[9]
  i1124.width = i1125[10]
  i1124.height = i1125[11]
  i1124.xOffset = i1125[12]
  i1124.yOffset = i1125[13]
  i1124.xAdvance = i1125[14]
  i1124.scale = i1125[15]
  return i1124
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1131 = data
  i1130.m_Name = i1131[0]
  i1130.m_HashCode = i1131[1]
  i1130.m_ElementType = i1131[2]
  i1130.m_Unicode = i1131[3]
  i1130.m_GlyphIndex = i1131[4]
  i1130.m_Scale = i1131[5]
  return i1130
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'sprite')
  i1134.m_Index = i1135[2]
  i1134.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1135[3], i1134.m_Metrics)
  i1134.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1135[4], i1134.m_GlyphRect)
  i1134.m_Scale = i1135[5]
  i1134.m_AtlasIndex = i1135[6]
  i1134.m_ClassDefinitionType = i1135[7]
  return i1134
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('TMPro.TMP_Style', i1139[i + 0]));
  }
  i1136.m_StyleList = i1138
  return i1136
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_Style' )
  var i1143 = data
  i1142.m_Name = i1143[0]
  i1142.m_HashCode = i1143[1]
  i1142.m_OpeningDefinition = i1143[2]
  i1142.m_ClosingDefinition = i1143[3]
  i1142.m_OpeningTagArray = i1143[4]
  i1142.m_ClosingTagArray = i1143[5]
  i1142.m_OpeningTagUnicodeArray = i1143[6]
  i1142.m_ClosingTagUnicodeArray = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1145 = data
  var i1147 = i1145[0]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1147[i + 0]) );
  }
  i1144.files = i1146
  i1144.componentToPrefabIds = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1151 = data
  i1150.path = i1151[0]
  request.r(i1151[1], i1151[2], 0, i1150, 'unityObject')
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1155[i + 0]) );
  }
  i1152.scriptsExecutionOrder = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1157[i + 0]) );
  }
  i1152.sortingLayers = i1156
  var i1159 = i1153[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1159[i + 0]) );
  }
  i1152.cullingLayers = i1158
  i1152.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1153[3], i1152.timeSettings)
  i1152.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1153[4], i1152.physicsSettings)
  i1152.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1153[5], i1152.physics2DSettings)
  i1152.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1153[6], i1152.qualitySettings)
  i1152.enableRealtimeShadows = !!i1153[7]
  i1152.enableAutoInstancing = !!i1153[8]
  i1152.enableDynamicBatching = !!i1153[9]
  i1152.lightmapEncodingQuality = i1153[10]
  i1152.desiredColorSpace = i1153[11]
  var i1161 = i1153[12]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1152.allTags = i1160
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.value = i1165[1]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.name = i1169[1]
  i1168.value = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1175 = data
  i1174.fixedDeltaTime = i1175[0]
  i1174.maximumDeltaTime = i1175[1]
  i1174.timeScale = i1175[2]
  i1174.maximumParticleTimestep = i1175[3]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1177 = data
  i1176.gravity = new pc.Vec3( i1177[0], i1177[1], i1177[2] )
  i1176.defaultSolverIterations = i1177[3]
  i1176.bounceThreshold = i1177[4]
  i1176.autoSyncTransforms = !!i1177[5]
  i1176.autoSimulation = !!i1177[6]
  var i1179 = i1177[7]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1179[i + 0]) );
  }
  i1176.collisionMatrix = i1178
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1183 = data
  i1182.enabled = !!i1183[0]
  i1182.layerId = i1183[1]
  i1182.otherLayerId = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'material')
  i1184.gravity = new pc.Vec2( i1185[2], i1185[3] )
  i1184.positionIterations = i1185[4]
  i1184.velocityIterations = i1185[5]
  i1184.velocityThreshold = i1185[6]
  i1184.maxLinearCorrection = i1185[7]
  i1184.maxAngularCorrection = i1185[8]
  i1184.maxTranslationSpeed = i1185[9]
  i1184.maxRotationSpeed = i1185[10]
  i1184.baumgarteScale = i1185[11]
  i1184.baumgarteTOIScale = i1185[12]
  i1184.timeToSleep = i1185[13]
  i1184.linearSleepTolerance = i1185[14]
  i1184.angularSleepTolerance = i1185[15]
  i1184.defaultContactOffset = i1185[16]
  i1184.autoSimulation = !!i1185[17]
  i1184.queriesHitTriggers = !!i1185[18]
  i1184.queriesStartInColliders = !!i1185[19]
  i1184.callbacksOnDisable = !!i1185[20]
  i1184.reuseCollisionCallbacks = !!i1185[21]
  i1184.autoSyncTransforms = !!i1185[22]
  var i1187 = i1185[23]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1187[i + 0]) );
  }
  i1184.collisionMatrix = i1186
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1191 = data
  i1190.enabled = !!i1191[0]
  i1190.layerId = i1191[1]
  i1190.otherLayerId = i1191[2]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1193 = data
  var i1195 = i1193[0]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1195[i + 0]) );
  }
  i1192.qualityLevels = i1194
  var i1197 = i1193[1]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( i1197[i + 0] );
  }
  i1192.names = i1196
  i1192.shadows = i1193[2]
  i1192.anisotropicFiltering = i1193[3]
  i1192.antiAliasing = i1193[4]
  i1192.lodBias = i1193[5]
  i1192.shadowCascades = i1193[6]
  i1192.shadowDistance = i1193[7]
  i1192.shadowmaskMode = i1193[8]
  i1192.shadowProjection = i1193[9]
  i1192.shadowResolution = i1193[10]
  i1192.softParticles = !!i1193[11]
  i1192.softVegetation = !!i1193[12]
  i1192.activeColorSpace = i1193[13]
  i1192.desiredColorSpace = i1193[14]
  i1192.masterTextureLimit = i1193[15]
  i1192.maxQueuedFrames = i1193[16]
  i1192.particleRaycastBudget = i1193[17]
  i1192.pixelLightCount = i1193[18]
  i1192.realtimeReflectionProbes = !!i1193[19]
  i1192.shadowCascade2Split = i1193[20]
  i1192.shadowCascade4Split = new pc.Vec3( i1193[21], i1193[22], i1193[23] )
  i1192.streamingMipmapsActive = !!i1193[24]
  i1192.vSyncCount = i1193[25]
  i1192.asyncUploadBufferSize = i1193[26]
  i1192.asyncUploadTimeSlice = i1193[27]
  i1192.billboardsFaceCameraPosition = !!i1193[28]
  i1192.shadowNearPlaneOffset = i1193[29]
  i1192.streamingMipmapsMemoryBudget = i1193[30]
  i1192.maximumLODLevel = i1193[31]
  i1192.streamingMipmapsAddAllCameras = !!i1193[32]
  i1192.streamingMipmapsMaxLevelReduction = i1193[33]
  i1192.streamingMipmapsRenderersPerFrame = i1193[34]
  i1192.resolutionScalingFixedDPIFactor = i1193[35]
  i1192.streamingMipmapsMaxFileIORequests = i1193[36]
  i1192.currentQualityLevel = i1193[37]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1203 = data
  i1202.weight = i1203[0]
  i1202.vertices = i1203[1]
  i1202.normals = i1203[2]
  i1202.tangents = i1203[3]
  return i1202
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'm_ObjectArgument')
  i1204.m_ObjectArgumentAssemblyTypeName = i1205[2]
  i1204.m_IntArgument = i1205[3]
  i1204.m_FloatArgument = i1205[4]
  i1204.m_StringArgument = i1205[5]
  i1204.m_BoolArgument = !!i1205[6]
  return i1204
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1207 = data
  i1206.xPlacement = i1207[0]
  i1206.yPlacement = i1207[1]
  i1206.xAdvance = i1207[2]
  i1206.yAdvance = i1207[3]
  return i1206
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[15],"71":[22],"72":[22],"73":[22],"74":[22],"75":[22],"76":[22],"77":[22],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[15],"93":[5],"94":[95],"96":[95],"40":[8],"25":[20],"48":[47],"97":[40],"98":[8],"99":[8],"42":[40],"11":[9,8],"100":[8],"41":[40],"101":[8],"102":[8],"103":[8],"104":[8],"105":[8],"106":[8],"107":[8],"108":[8],"109":[8],"110":[9,8],"111":[8],"112":[8],"113":[8],"114":[8],"115":[9,8],"116":[8],"117":[47],"118":[47],"119":[47],"120":[47],"121":[15],"122":[15],"123":[8],"38":[5,8],"45":[8,9],"124":[8],"125":[9,8],"126":[5],"127":[9,8],"128":[8],"129":[130],"131":[130],"132":[15],"133":[134],"135":[130]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Animation","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","FixedJoystick","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","UnityEngine.Light","UnityEngine.MeshCollider","CarController","UnityEngine.SphereCollider","UnityEngine.Rigidbody","CarAudio","CarData","PlayerController","LunaJoystick","UnityEngine.TrailRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","AIPathController","UnityEngine.BoxCollider","FinishLineColider","GameManager","Cinemachine.CinemachineVirtualCamera","MoveAndHide","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","BtnReset","TMPro.TextMeshProUGUI","GameOverPanel","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineComposer","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.57f1";

Deserializers.productName = "HotSlide";

Deserializers.lunaInitializationTime = "02/11/2025 11:00:26";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "CarSlide";

Deserializers.lunaAppID = "27387";

Deserializers.projectId = "f69affc4738446647816041afc25d953";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.inputsystem: 1.11.1\ncom.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1841";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4512";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5bc28f04-fe2c-4f5b-a202-814d5f4a7f1f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"]],[],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

