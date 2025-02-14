var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointSpring' )
  var i611 = data
  i610.spring = i611[0]
  i610.damper = i611[1]
  i610.targetPosition = i611[2]
  return i610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointMotor' )
  var i613 = data
  i612.m_TargetVelocity = i613[0]
  i612.m_Force = i613[1]
  i612.m_FreeSpin = i613[2]
  return i612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointLimits' )
  var i615 = data
  i614.m_Min = i615[0]
  i614.m_Max = i615[1]
  i614.m_Bounciness = i615[2]
  i614.m_BounceMinVelocity = i615[3]
  i614.m_ContactDistance = i615[4]
  i614.minBounce = i615[5]
  i614.maxBounce = i615[6]
  return i614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointDrive' )
  var i617 = data
  i616.m_PositionSpring = i617[0]
  i616.m_PositionDamper = i617[1]
  i616.m_MaximumForce = i617[2]
  i616.m_UseAcceleration = i617[3]
  return i616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i619 = data
  i618.m_Spring = i619[0]
  i618.m_Damper = i619[1]
  return i618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i621 = data
  i620.m_Limit = i621[0]
  i620.m_Bounciness = i621[1]
  i620.m_ContactDistance = i621[2]
  return i620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i623 = data
  i622.m_ExtremumSlip = i623[0]
  i622.m_ExtremumValue = i623[1]
  i622.m_AsymptoteSlip = i623[2]
  i622.m_AsymptoteValue = i623[3]
  i622.m_Stiffness = i623[4]
  return i622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i625 = data
  i624.m_LowerAngle = i625[0]
  i624.m_UpperAngle = i625[1]
  return i624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i627 = data
  i626.m_MotorSpeed = i627[0]
  i626.m_MaximumMotorTorque = i627[1]
  return i626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i629 = data
  i628.m_DampingRatio = i629[0]
  i628.m_Frequency = i629[1]
  i628.m_Angle = i629[2]
  return i628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i631 = data
  i630.m_LowerTranslation = i631[0]
  i630.m_UpperTranslation = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i633 = data
  i632.name = i633[0]
  i632.halfPrecision = !!i633[1]
  i632.useUInt32IndexFormat = !!i633[2]
  i632.vertexCount = i633[3]
  i632.aabb = i633[4]
  var i635 = i633[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( !!i635[i + 0] );
  }
  i632.streams = i634
  i632.vertices = i633[6]
  var i637 = i633[7]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i637[i + 0]) );
  }
  i632.subMeshes = i636
  var i639 = i633[8]
  var i638 = []
  for(var i = 0; i < i639.length; i += 16) {
    i638.push( new pc.Mat4().setData(i639[i + 0], i639[i + 1], i639[i + 2], i639[i + 3],  i639[i + 4], i639[i + 5], i639[i + 6], i639[i + 7],  i639[i + 8], i639[i + 9], i639[i + 10], i639[i + 11],  i639[i + 12], i639[i + 13], i639[i + 14], i639[i + 15]) );
  }
  i632.bindposes = i638
  var i641 = i633[9]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i641[i + 0]) );
  }
  i632.blendShapes = i640
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i647 = data
  i646.triangles = i647[0]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i653 = data
  i652.name = i653[0]
  var i655 = i653[1]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i655[i + 0]) );
  }
  i652.frames = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i656 = root || new pc.UnityMaterial()
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'shader')
  i656.renderQueue = i657[3]
  i656.enableInstancing = !!i657[4]
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i659[i + 0]) );
  }
  i656.floatParameters = i658
  var i661 = i657[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i661[i + 0]) );
  }
  i656.colorParameters = i660
  var i663 = i657[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i663[i + 0]) );
  }
  i656.vectorParameters = i662
  var i665 = i657[8]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i665[i + 0]) );
  }
  i656.textureParameters = i664
  var i667 = i657[9]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i667[i + 0]) );
  }
  i656.materialFlags = i666
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Color(i675[1], i675[2], i675[3], i675[4])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = new pc.Vec4( i679[1], i679[2], i679[3], i679[4] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i683 = data
  i682.name = i683[0]
  request.r(i683[1], i683[2], 0, i682, 'value')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i687 = data
  i686.name = i687[0]
  i686.enabled = !!i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i689 = data
  i688.position = new pc.Vec3( i689[0], i689[1], i689[2] )
  i688.scale = new pc.Vec3( i689[3], i689[4], i689[5] )
  i688.rotation = new pc.Quat(i689[6], i689[7], i689[8], i689[9])
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i691 = data
  i690.playAutomatically = !!i691[0]
  request.r(i691[1], i691[2], 0, i690, 'clip')
  var i693 = i691[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.clips = i692
  i690.wrapMode = i691[4]
  i690.enabled = !!i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'sharedMesh')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'additionalVertexStreams')
  i698.enabled = !!i699[2]
  request.r(i699[3], i699[4], 0, i698, 'sharedMaterial')
  var i701 = i699[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sharedMaterials = i700
  i698.receiveShadows = !!i699[6]
  i698.shadowCastingMode = i699[7]
  i698.sortingLayerID = i699[8]
  i698.sortingOrder = i699[9]
  i698.lightmapIndex = i699[10]
  i698.lightmapSceneIndex = i699[11]
  i698.lightmapScaleOffset = new pc.Vec4( i699[12], i699[13], i699[14], i699[15] )
  i698.lightProbeUsage = i699[16]
  i698.reflectionProbeUsage = i699[17]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i705 = data
  i704.name = i705[0]
  i704.tagId = i705[1]
  i704.enabled = !!i705[2]
  i704.isStatic = !!i705[3]
  i704.layer = i705[4]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i707 = data
  i706.name = i707[0]
  i706.width = i707[1]
  i706.height = i707[2]
  i706.mipmapCount = i707[3]
  i706.anisoLevel = i707[4]
  i706.filterMode = i707[5]
  i706.hdr = !!i707[6]
  i706.format = i707[7]
  i706.wrapMode = i707[8]
  i706.alphaIsTransparency = !!i707[9]
  i706.alphaSource = i707[10]
  i706.graphicsFormat = i707[11]
  i706.sRGBTexture = !!i707[12]
  i706.desiredColorSpace = i707[13]
  i706.wrapU = i707[14]
  i706.wrapV = i707[15]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i709 = data
  i708.pivot = new pc.Vec2( i709[0], i709[1] )
  i708.anchorMin = new pc.Vec2( i709[2], i709[3] )
  i708.anchorMax = new pc.Vec2( i709[4], i709[5] )
  i708.sizeDelta = new pc.Vec2( i709[6], i709[7] )
  i708.anchoredPosition3D = new pc.Vec3( i709[8], i709[9], i709[10] )
  i708.rotation = new pc.Quat(i709[11], i709[12], i709[13], i709[14])
  i708.scale = new pc.Vec3( i709[15], i709[16], i709[17] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i711 = data
  i710.cullTransparentMesh = !!i711[0]
  return i710
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Image' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Sprite')
  i712.m_Type = i713[2]
  i712.m_PreserveAspect = !!i713[3]
  i712.m_FillCenter = !!i713[4]
  i712.m_FillMethod = i713[5]
  i712.m_FillAmount = i713[6]
  i712.m_FillClockwise = !!i713[7]
  i712.m_FillOrigin = i713[8]
  i712.m_UseSpriteMesh = !!i713[9]
  i712.m_PixelsPerUnitMultiplier = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[13]
  i712.m_Color = new pc.Color(i713[14], i713[15], i713[16], i713[17])
  i712.m_RaycastTarget = !!i713[18]
  i712.m_RaycastPadding = new pc.Vec4( i713[19], i713[20], i713[21], i713[22] )
  return i712
}

Deserializers["FixedJoystick"] = function (request, data, root) {
  var i714 = root || request.c( 'FixedJoystick' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'background')
  i714.handleRange = i715[2]
  i714.deadZone = i715[3]
  i714.axisOptions = i715[4]
  i714.snapX = !!i715[5]
  i714.snapY = !!i715[6]
  request.r(i715[7], i715[8], 0, i714, 'stickHandle')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i717 = data
  i716.name = i717[0]
  i716.atlasId = i717[1]
  i716.mipmapCount = i717[2]
  i716.hdr = !!i717[3]
  i716.size = i717[4]
  i716.anisoLevel = i717[5]
  i716.filterMode = i717[6]
  var i719 = i717[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 4) {
    i718.push( UnityEngine.Rect.MinMaxRect(i719[i + 0], i719[i + 1], i719[i + 2], i719[i + 3]) );
  }
  i716.rects = i718
  i716.wrapU = i717[8]
  i716.wrapV = i717[9]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i723 = data
  i722.name = i723[0]
  i722.index = i723[1]
  i722.startup = !!i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.aspect = i725[1]
  i724.orthographic = !!i725[2]
  i724.orthographicSize = i725[3]
  i724.backgroundColor = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.nearClipPlane = i725[8]
  i724.farClipPlane = i725[9]
  i724.fieldOfView = i725[10]
  i724.depth = i725[11]
  i724.clearFlags = i725[12]
  i724.cullingMask = i725[13]
  i724.rect = i725[14]
  request.r(i725[15], i725[16], 0, i724, 'targetTexture')
  i724.usePhysicalProperties = !!i725[17]
  i724.focalLength = i725[18]
  i724.sensorSize = new pc.Vec2( i725[19], i725[20] )
  i724.lensShift = new pc.Vec2( i725[21], i725[22] )
  i724.gateFit = i725[23]
  return i724
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i726 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i727 = data
  i726.m_ShowDebugText = !!i727[0]
  i726.m_ShowCameraFrustum = !!i727[1]
  i726.m_IgnoreTimeScale = !!i727[2]
  request.r(i727[3], i727[4], 0, i726, 'm_WorldUpOverride')
  i726.m_UpdateMethod = i727[5]
  i726.m_BlendUpdateMethod = i727[6]
  i726.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i727[7], i726.m_DefaultBlend)
  request.r(i727[8], i727[9], 0, i726, 'm_CustomBlends')
  i726.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i727[10], i726.m_CameraCutEvent)
  i726.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i727[11], i726.m_CameraActivatedEvent)
  return i726
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i728 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i729 = data
  i728.m_Style = i729[0]
  i728.m_Time = i729[1]
  i728.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i729[2] } )
  return i728
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i731 = data
  i730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i731[0], i730.m_PersistentCalls)
  return i730
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('UnityEngine.Events.PersistentCall', i735[i + 0]));
  }
  i732.m_Calls = i734
  return i732
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Target')
  i738.m_TargetAssemblyTypeName = i739[2]
  i738.m_MethodName = i739[3]
  i738.m_Mode = i739[4]
  i738.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i739[5], i738.m_Arguments)
  i738.m_CallState = i739[6]
  return i738
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i740 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i741 = data
  i740.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i741[0], i740.m_PersistentCalls)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.type = i743[1]
  i742.color = new pc.Color(i743[2], i743[3], i743[4], i743[5])
  i742.cullingMask = i743[6]
  i742.intensity = i743[7]
  i742.range = i743[8]
  i742.spotAngle = i743[9]
  i742.shadows = i743[10]
  i742.shadowNormalBias = i743[11]
  i742.shadowBias = i743[12]
  i742.shadowStrength = i743[13]
  i742.shadowResolution = i743[14]
  i742.lightmapBakeType = i743[15]
  i742.renderMode = i743[16]
  request.r(i743[17], i743[18], 0, i742, 'cookie')
  i742.cookieSize = i743[19]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.isTrigger = !!i745[1]
  request.r(i745[2], i745[3], 0, i744, 'material')
  request.r(i745[4], i745[5], 0, i744, 'sharedMesh')
  i744.convex = !!i745[6]
  return i744
}

Deserializers["CarController"] = function (request, data, root) {
  var i746 = root || request.c( 'CarController' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'sphereCollider')
  request.r(i747[2], i747[3], 0, i746, 'sphereRB')
  i746.isDriffing = !!i747[4]
  request.r(i747[5], i747[6], 0, i746, 'CarBody')
  i746.Gravity = i747[7]
  i746.MaxSpeed = i747[8]
  i746.MaxAngleToDrift = i747[9]
  i746.MaxSteerAngle = i747[10]
  i746.SteerSensitivity = i747[11]
  i746.DriftTraction = i747[12]
  i746.FrictionNormal = i747[13]
  i746.DriftFriction = i747[14]
  var i749 = i747[15]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i746.wheelParticlesHolder = i748
  var i751 = i747[16]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i746.trailRenderHolder = i750
  request.r(i747[17], i747[18], 0, i746, 'carAudio')
  request.r(i747[19], i747[20], 0, i746, 'NormalPlayerCarData')
  request.r(i747[21], i747[22], 0, i746, 'AICarData')
  return i746
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i754 = root || request.c( 'PlayerController' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'fixedJoystick')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i757 = data
  i756.enabled = !!i757[0]
  request.r(i757[1], i757[2], 0, i756, 'sharedMaterial')
  var i759 = i757[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sharedMaterials = i758
  i756.receiveShadows = !!i757[4]
  i756.shadowCastingMode = i757[5]
  i756.sortingLayerID = i757[6]
  i756.sortingOrder = i757[7]
  i756.lightmapIndex = i757[8]
  i756.lightmapSceneIndex = i757[9]
  i756.lightmapScaleOffset = new pc.Vec4( i757[10], i757[11], i757[12], i757[13] )
  i756.lightProbeUsage = i757[14]
  i756.reflectionProbeUsage = i757[15]
  var i761 = i757[16]
  var i760 = []
  for(var i = 0; i < i761.length; i += 3) {
    i760.push( new pc.Vec3( i761[i + 0], i761[i + 1], i761[i + 2] ) );
  }
  i756.positions = i760
  i756.positionCount = i757[17]
  i756.time = i757[18]
  i756.startWidth = i757[19]
  i756.endWidth = i757[20]
  i756.widthMultiplier = i757[21]
  i756.autodestruct = !!i757[22]
  i756.emitting = !!i757[23]
  i756.numCornerVertices = i757[24]
  i756.numCapVertices = i757[25]
  i756.minVertexDistance = i757[26]
  i756.colorGradient = i757[27] ? new pc.ColorGradient(i757[27][0], i757[27][1], i757[27][2]) : null
  i756.startColor = new pc.Color(i757[28], i757[29], i757[30], i757[31])
  i756.endColor = new pc.Color(i757[32], i757[33], i757[34], i757[35])
  i756.generateLightingData = !!i757[36]
  i756.textureMode = i757[37]
  i756.alignment = i757[38]
  i756.widthCurve = new pc.AnimationCurve( { keys_flow: i757[39] } )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i765 = data
  i764.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i765[0], i764.main)
  i764.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i765[1], i764.colorBySpeed)
  i764.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i765[2], i764.colorOverLifetime)
  i764.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i765[3], i764.emission)
  i764.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i765[4], i764.rotationBySpeed)
  i764.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i765[5], i764.rotationOverLifetime)
  i764.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i765[6], i764.shape)
  i764.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i765[7], i764.sizeBySpeed)
  i764.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i765[8], i764.sizeOverLifetime)
  i764.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i765[9], i764.textureSheetAnimation)
  i764.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i765[10], i764.velocityOverLifetime)
  i764.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i765[11], i764.noise)
  i764.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i765[12], i764.inheritVelocity)
  i764.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i765[13], i764.forceOverLifetime)
  i764.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i765[14], i764.limitVelocityOverLifetime)
  i764.useAutoRandomSeed = !!i765[15]
  i764.randomSeed = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemMain()
  var i767 = data
  i766.duration = i767[0]
  i766.loop = !!i767[1]
  i766.prewarm = !!i767[2]
  i766.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.startDelay)
  i766.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.startLifetime)
  i766.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[5], i766.startSpeed)
  i766.startSize3D = !!i767[6]
  i766.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startSizeX)
  i766.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.startSizeY)
  i766.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.startSizeZ)
  i766.startRotation3D = !!i767[10]
  i766.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.startRotationX)
  i766.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[12], i766.startRotationY)
  i766.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[13], i766.startRotationZ)
  i766.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[14], i766.startColor)
  i766.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.gravityModifier)
  i766.simulationSpace = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'customSimulationSpace')
  i766.simulationSpeed = i767[19]
  i766.useUnscaledTime = !!i767[20]
  i766.scalingMode = i767[21]
  i766.playOnAwake = !!i767[22]
  i766.maxParticles = i767[23]
  i766.emitterVelocityMode = i767[24]
  i766.stopAction = i767[25]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i768 = root || new pc.MinMaxCurve()
  var i769 = data
  i768.mode = i769[0]
  i768.curveMin = new pc.AnimationCurve( { keys_flow: i769[1] } )
  i768.curveMax = new pc.AnimationCurve( { keys_flow: i769[2] } )
  i768.curveMultiplier = i769[3]
  i768.constantMin = i769[4]
  i768.constantMax = i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxGradient()
  var i771 = data
  i770.mode = i771[0]
  i770.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[1], i770.gradientMin)
  i770.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[2], i770.gradientMax)
  i770.colorMin = new pc.Color(i771[3], i771[4], i771[5], i771[6])
  i770.colorMax = new pc.Color(i771[7], i771[8], i771[9], i771[10])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i773 = data
  i772.mode = i773[0]
  var i775 = i773[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i775[i + 0]) );
  }
  i772.colorKeys = i774
  var i777 = i773[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i777[i + 0]) );
  }
  i772.alphaKeys = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  i778.range = new pc.Vec2( i779[2], i779[3] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i783 = data
  i782.color = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  i782.time = i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i787 = data
  i786.alpha = i787[0]
  i786.time = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemColorOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[1], i788.color)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemEmitter()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.rateOverTime)
  i790.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.rateOverDistance)
  var i793 = i791[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i793[i + 0]) );
  }
  i790.bursts = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemBurst()
  var i797 = data
  i796.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[0], i796.count)
  i796.cycleCount = i797[1]
  i796.minCount = i797[2]
  i796.maxCount = i797[3]
  i796.repeatInterval = i797[4]
  i796.time = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemRotationBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemShape()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.shapeType = i803[1]
  i802.randomDirectionAmount = i803[2]
  i802.sphericalDirectionAmount = i803[3]
  i802.randomPositionAmount = i803[4]
  i802.alignToDirection = !!i803[5]
  i802.radius = i803[6]
  i802.radiusMode = i803[7]
  i802.radiusSpread = i803[8]
  i802.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.radiusSpeed)
  i802.radiusThickness = i803[10]
  i802.angle = i803[11]
  i802.length = i803[12]
  i802.boxThickness = new pc.Vec3( i803[13], i803[14], i803[15] )
  i802.meshShapeType = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'mesh')
  request.r(i803[19], i803[20], 0, i802, 'meshRenderer')
  request.r(i803[21], i803[22], 0, i802, 'skinnedMeshRenderer')
  i802.useMeshMaterialIndex = !!i803[23]
  i802.meshMaterialIndex = i803[24]
  i802.useMeshColors = !!i803[25]
  i802.normalOffset = i803[26]
  i802.arc = i803[27]
  i802.arcMode = i803[28]
  i802.arcSpread = i803[29]
  i802.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[30], i802.arcSpeed)
  i802.donutRadius = i803[31]
  i802.position = new pc.Vec3( i803[32], i803[33], i803[34] )
  i802.rotation = new pc.Vec3( i803[35], i803[36], i803[37] )
  i802.scale = new pc.Vec3( i803[38], i803[39], i803[40] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemSizeBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.animation = i809[2]
  i808.numTilesX = i809[3]
  i808.numTilesY = i809[4]
  i808.useRandomRow = !!i809[5]
  i808.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[6], i808.frameOverTime)
  i808.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.startFrame)
  i808.cycleCount = i809[8]
  i808.rowIndex = i809[9]
  i808.flipU = i809[10]
  i808.flipV = i809[11]
  i808.spriteCount = i809[12]
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sprites = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.radial)
  i814.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[5], i814.speedModifier)
  i814.space = i815[6]
  i814.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.orbitalX)
  i814.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.orbitalY)
  i814.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.orbitalZ)
  i814.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[10], i814.orbitalOffsetX)
  i814.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[11], i814.orbitalOffsetY)
  i814.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[12], i814.orbitalOffsetZ)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemNoise()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.separateAxes = !!i817[1]
  i816.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.strengthX)
  i816.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.strengthY)
  i816.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.strengthZ)
  i816.frequency = i817[5]
  i816.damping = !!i817[6]
  i816.octaveCount = i817[7]
  i816.octaveMultiplier = i817[8]
  i816.octaveScale = i817[9]
  i816.quality = i817[10]
  i816.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.scrollSpeed)
  i816.scrollSpeedMultiplier = i817[12]
  i816.remapEnabled = !!i817[13]
  i816.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[14], i816.remapX)
  i816.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[15], i816.remapY)
  i816.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[16], i816.remapZ)
  i816.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[17], i816.positionAmount)
  i816.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[18], i816.rotationAmount)
  i816.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[19], i816.sizeAmount)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemInheritVelocity()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.mode = i819[1]
  i818.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.curve)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemForceOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.space = i821[4]
  i820.randomized = !!i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.limit)
  i822.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.limitX)
  i822.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.limitY)
  i822.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.limitZ)
  i822.dampen = i823[5]
  i822.separateAxes = !!i823[6]
  i822.space = i823[7]
  i822.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[8], i822.drag)
  i822.multiplyDragByParticleSize = !!i823[9]
  i822.multiplyDragByParticleVelocity = !!i823[10]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i825 = data
  i824.enabled = !!i825[0]
  request.r(i825[1], i825[2], 0, i824, 'sharedMaterial')
  var i827 = i825[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[4]
  i824.shadowCastingMode = i825[5]
  i824.sortingLayerID = i825[6]
  i824.sortingOrder = i825[7]
  i824.lightmapIndex = i825[8]
  i824.lightmapSceneIndex = i825[9]
  i824.lightmapScaleOffset = new pc.Vec4( i825[10], i825[11], i825[12], i825[13] )
  i824.lightProbeUsage = i825[14]
  i824.reflectionProbeUsage = i825[15]
  request.r(i825[16], i825[17], 0, i824, 'mesh')
  i824.meshCount = i825[18]
  i824.activeVertexStreamsCount = i825[19]
  i824.alignment = i825[20]
  i824.renderMode = i825[21]
  i824.sortMode = i825[22]
  i824.lengthScale = i825[23]
  i824.velocityScale = i825[24]
  i824.cameraVelocityScale = i825[25]
  i824.normalDirection = i825[26]
  i824.sortingFudge = i825[27]
  i824.minParticleSize = i825[28]
  i824.maxParticleSize = i825[29]
  i824.pivot = new pc.Vec3( i825[30], i825[31], i825[32] )
  request.r(i825[33], i825[34], 0, i824, 'trailMaterial')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'clip')
  request.r(i829[2], i829[3], 0, i828, 'outputAudioMixerGroup')
  i828.playOnAwake = !!i829[4]
  i828.loop = !!i829[5]
  i828.time = i829[6]
  i828.volume = i829[7]
  i828.pitch = i829[8]
  i828.enabled = !!i829[9]
  return i828
}

Deserializers["CarAudio"] = function (request, data, root) {
  var i830 = root || request.c( 'CarAudio' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'engineSound')
  request.r(i831[2], i831[3], 0, i830, 'driftSound')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i833 = data
  i832.enabled = !!i833[0]
  i832.isTrigger = !!i833[1]
  request.r(i833[2], i833[3], 0, i832, 'material')
  i832.center = new pc.Vec3( i833[4], i833[5], i833[6] )
  i832.radius = i833[7]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i835 = data
  i834.mass = i835[0]
  i834.drag = i835[1]
  i834.angularDrag = i835[2]
  i834.useGravity = !!i835[3]
  i834.isKinematic = !!i835[4]
  i834.constraints = i835[5]
  i834.maxAngularVelocity = i835[6]
  i834.collisionDetectionMode = i835[7]
  i834.interpolation = i835[8]
  return i834
}

Deserializers["AIPathController"] = function (request, data, root) {
  var i836 = root || request.c( 'AIPathController' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'pathHolder')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i839 = data
  i838.center = new pc.Vec3( i839[0], i839[1], i839[2] )
  i838.size = new pc.Vec3( i839[3], i839[4], i839[5] )
  i838.enabled = !!i839[6]
  i838.isTrigger = !!i839[7]
  request.r(i839[8], i839[9], 0, i838, 'material')
  return i838
}

Deserializers["FinishLineColider"] = function (request, data, root) {
  var i840 = root || request.c( 'FinishLineColider' )
  var i841 = data
  return i840
}

Deserializers["GameManager"] = function (request, data, root) {
  var i842 = root || request.c( 'GameManager' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'cinemachineCamera')
  request.r(i843[2], i843[3], 0, i842, 'playerCar')
  request.r(i843[4], i843[5], 0, i842, 'aiCar')
  i842.playerCarType = i843[6]
  i842.CustomSpeedPlayer = i843[7]
  i842.CustomMaxAngleToDriftPlayer = i843[8]
  i842.CustomSteerSensitivityPlayer = i843[9]
  i842.CustomDriftTractionPlayer = i843[10]
  i842.aiCarType = i843[11]
  i842.CustomSpeedAI = i843[12]
  i842.CustomMaxAngleToDriftAI = i843[13]
  i842.CustomSteerSensitivityAI = i843[14]
  i842.CustomDriftTractionAI = i843[15]
  return i842
}

Deserializers["MoveAndHide"] = function (request, data, root) {
  var i844 = root || request.c( 'MoveAndHide' )
  var i845 = data
  i844.targetPosition = new pc.Vec3( i845[0], i845[1], i845[2] )
  i844.moveDuration = i845[3]
  i844.fadeDuration = i845[4]
  i844.delayBetween = i845[5]
  request.r(i845[6], i845[7], 0, i844, 'particle')
  return i844
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TextMeshPro' )
  var i847 = data
  i846._SortingLayer = i847[0]
  i846._SortingLayerID = i847[1]
  i846._SortingOrder = i847[2]
  i846.m_hasFontAssetChanged = !!i847[3]
  request.r(i847[4], i847[5], 0, i846, 'm_renderer')
  i846.m_maskType = i847[6]
  i846.m_text = i847[7]
  i846.m_isRightToLeft = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'm_fontAsset')
  request.r(i847[11], i847[12], 0, i846, 'm_sharedMaterial')
  var i849 = i847[13]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.m_fontSharedMaterials = i848
  request.r(i847[14], i847[15], 0, i846, 'm_fontMaterial')
  var i851 = i847[16]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i846.m_fontMaterials = i850
  i846.m_fontColor32 = UnityEngine.Color32.ConstructColor(i847[17], i847[18], i847[19], i847[20])
  i846.m_fontColor = new pc.Color(i847[21], i847[22], i847[23], i847[24])
  i846.m_enableVertexGradient = !!i847[25]
  i846.m_colorMode = i847[26]
  i846.m_fontColorGradient = request.d('TMPro.VertexGradient', i847[27], i846.m_fontColorGradient)
  request.r(i847[28], i847[29], 0, i846, 'm_fontColorGradientPreset')
  request.r(i847[30], i847[31], 0, i846, 'm_spriteAsset')
  i846.m_tintAllSprites = !!i847[32]
  request.r(i847[33], i847[34], 0, i846, 'm_StyleSheet')
  i846.m_TextStyleHashCode = i847[35]
  i846.m_overrideHtmlColors = !!i847[36]
  i846.m_faceColor = UnityEngine.Color32.ConstructColor(i847[37], i847[38], i847[39], i847[40])
  i846.m_fontSize = i847[41]
  i846.m_fontSizeBase = i847[42]
  i846.m_fontWeight = i847[43]
  i846.m_enableAutoSizing = !!i847[44]
  i846.m_fontSizeMin = i847[45]
  i846.m_fontSizeMax = i847[46]
  i846.m_fontStyle = i847[47]
  i846.m_HorizontalAlignment = i847[48]
  i846.m_VerticalAlignment = i847[49]
  i846.m_textAlignment = i847[50]
  i846.m_characterSpacing = i847[51]
  i846.m_wordSpacing = i847[52]
  i846.m_lineSpacing = i847[53]
  i846.m_lineSpacingMax = i847[54]
  i846.m_paragraphSpacing = i847[55]
  i846.m_charWidthMaxAdj = i847[56]
  i846.m_enableWordWrapping = !!i847[57]
  i846.m_wordWrappingRatios = i847[58]
  i846.m_overflowMode = i847[59]
  request.r(i847[60], i847[61], 0, i846, 'm_linkedTextComponent')
  request.r(i847[62], i847[63], 0, i846, 'parentLinkedComponent')
  i846.m_enableKerning = !!i847[64]
  i846.m_enableExtraPadding = !!i847[65]
  i846.checkPaddingRequired = !!i847[66]
  i846.m_isRichText = !!i847[67]
  i846.m_parseCtrlCharacters = !!i847[68]
  i846.m_isOrthographic = !!i847[69]
  i846.m_isCullingEnabled = !!i847[70]
  i846.m_horizontalMapping = i847[71]
  i846.m_verticalMapping = i847[72]
  i846.m_uvLineOffset = i847[73]
  i846.m_geometrySortingOrder = i847[74]
  i846.m_IsTextObjectScaleStatic = !!i847[75]
  i846.m_VertexBufferAutoSizeReduction = !!i847[76]
  i846.m_useMaxVisibleDescender = !!i847[77]
  i846.m_pageToDisplay = i847[78]
  i846.m_margin = new pc.Vec4( i847[79], i847[80], i847[81], i847[82] )
  i846.m_isUsingLegacyAnimationComponent = !!i847[83]
  i846.m_isVolumetricText = !!i847[84]
  request.r(i847[85], i847[86], 0, i846, 'm_Material')
  i846.m_Maskable = !!i847[87]
  i846.m_Color = new pc.Color(i847[88], i847[89], i847[90], i847[91])
  i846.m_RaycastTarget = !!i847[92]
  i846.m_RaycastPadding = new pc.Vec4( i847[93], i847[94], i847[95], i847[96] )
  return i846
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.VertexGradient' )
  var i853 = data
  i852.topLeft = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.topRight = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.bottomLeft = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  i852.bottomRight = new pc.Color(i853[12], i853[13], i853[14], i853[15])
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.planeDistance = i855[1]
  i854.referencePixelsPerUnit = i855[2]
  i854.isFallbackOverlay = !!i855[3]
  i854.renderMode = i855[4]
  i854.renderOrder = i855[5]
  i854.sortingLayerName = i855[6]
  i854.sortingOrder = i855[7]
  i854.scaleFactor = i855[8]
  request.r(i855[9], i855[10], 0, i854, 'worldCamera')
  i854.overrideSorting = !!i855[11]
  i854.pixelPerfect = !!i855[12]
  i854.targetDisplay = i855[13]
  i854.overridePixelPerfect = !!i855[14]
  return i854
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i857 = data
  i856.m_UiScaleMode = i857[0]
  i856.m_ReferencePixelsPerUnit = i857[1]
  i856.m_ScaleFactor = i857[2]
  i856.m_ReferenceResolution = new pc.Vec2( i857[3], i857[4] )
  i856.m_ScreenMatchMode = i857[5]
  i856.m_MatchWidthOrHeight = i857[6]
  i856.m_PhysicalUnit = i857[7]
  i856.m_FallbackScreenDPI = i857[8]
  i856.m_DefaultSpriteDPI = i857[9]
  i856.m_DynamicPixelsPerUnit = i857[10]
  i856.m_PresetInfoIsWorld = !!i857[11]
  return i856
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i859 = data
  i858.m_IgnoreReversedGraphics = !!i859[0]
  i858.m_BlockingObjects = i859[1]
  i858.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i859[2] )
  return i858
}

Deserializers["LunaJoystick"] = function (request, data, root) {
  var i860 = root || request.c( 'LunaJoystick' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'joystickBackground')
  request.r(i861[2], i861[3], 0, i860, 'joystickHandle')
  i860.moveSpeed = i861[4]
  i860.inputVector = new pc.Vec2( i861[5], i861[6] )
  return i860
}

Deserializers["GameOverPanel"] = function (request, data, root) {
  var i862 = root || request.c( 'GameOverPanel' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'gameOverPanel')
  request.r(i863[2], i863[3], 0, i862, 'finishTxt')
  request.r(i863[4], i863[5], 0, i862, 'retryButton')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i865 = data
  i864.m_Alpha = i865[0]
  i864.m_Interactable = !!i865[1]
  i864.m_BlocksRaycasts = !!i865[2]
  i864.m_IgnoreParentGroups = !!i865[3]
  i864.enabled = !!i865[4]
  return i864
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i867 = data
  i866.m_hasFontAssetChanged = !!i867[0]
  request.r(i867[1], i867[2], 0, i866, 'm_baseMaterial')
  i866.m_maskOffset = new pc.Vec4( i867[3], i867[4], i867[5], i867[6] )
  i866.m_text = i867[7]
  i866.m_isRightToLeft = !!i867[8]
  request.r(i867[9], i867[10], 0, i866, 'm_fontAsset')
  request.r(i867[11], i867[12], 0, i866, 'm_sharedMaterial')
  var i869 = i867[13]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.m_fontSharedMaterials = i868
  request.r(i867[14], i867[15], 0, i866, 'm_fontMaterial')
  var i871 = i867[16]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i866.m_fontMaterials = i870
  i866.m_fontColor32 = UnityEngine.Color32.ConstructColor(i867[17], i867[18], i867[19], i867[20])
  i866.m_fontColor = new pc.Color(i867[21], i867[22], i867[23], i867[24])
  i866.m_enableVertexGradient = !!i867[25]
  i866.m_colorMode = i867[26]
  i866.m_fontColorGradient = request.d('TMPro.VertexGradient', i867[27], i866.m_fontColorGradient)
  request.r(i867[28], i867[29], 0, i866, 'm_fontColorGradientPreset')
  request.r(i867[30], i867[31], 0, i866, 'm_spriteAsset')
  i866.m_tintAllSprites = !!i867[32]
  request.r(i867[33], i867[34], 0, i866, 'm_StyleSheet')
  i866.m_TextStyleHashCode = i867[35]
  i866.m_overrideHtmlColors = !!i867[36]
  i866.m_faceColor = UnityEngine.Color32.ConstructColor(i867[37], i867[38], i867[39], i867[40])
  i866.m_fontSize = i867[41]
  i866.m_fontSizeBase = i867[42]
  i866.m_fontWeight = i867[43]
  i866.m_enableAutoSizing = !!i867[44]
  i866.m_fontSizeMin = i867[45]
  i866.m_fontSizeMax = i867[46]
  i866.m_fontStyle = i867[47]
  i866.m_HorizontalAlignment = i867[48]
  i866.m_VerticalAlignment = i867[49]
  i866.m_textAlignment = i867[50]
  i866.m_characterSpacing = i867[51]
  i866.m_wordSpacing = i867[52]
  i866.m_lineSpacing = i867[53]
  i866.m_lineSpacingMax = i867[54]
  i866.m_paragraphSpacing = i867[55]
  i866.m_charWidthMaxAdj = i867[56]
  i866.m_enableWordWrapping = !!i867[57]
  i866.m_wordWrappingRatios = i867[58]
  i866.m_overflowMode = i867[59]
  request.r(i867[60], i867[61], 0, i866, 'm_linkedTextComponent')
  request.r(i867[62], i867[63], 0, i866, 'parentLinkedComponent')
  i866.m_enableKerning = !!i867[64]
  i866.m_enableExtraPadding = !!i867[65]
  i866.checkPaddingRequired = !!i867[66]
  i866.m_isRichText = !!i867[67]
  i866.m_parseCtrlCharacters = !!i867[68]
  i866.m_isOrthographic = !!i867[69]
  i866.m_isCullingEnabled = !!i867[70]
  i866.m_horizontalMapping = i867[71]
  i866.m_verticalMapping = i867[72]
  i866.m_uvLineOffset = i867[73]
  i866.m_geometrySortingOrder = i867[74]
  i866.m_IsTextObjectScaleStatic = !!i867[75]
  i866.m_VertexBufferAutoSizeReduction = !!i867[76]
  i866.m_useMaxVisibleDescender = !!i867[77]
  i866.m_pageToDisplay = i867[78]
  i866.m_margin = new pc.Vec4( i867[79], i867[80], i867[81], i867[82] )
  i866.m_isUsingLegacyAnimationComponent = !!i867[83]
  i866.m_isVolumetricText = !!i867[84]
  request.r(i867[85], i867[86], 0, i866, 'm_Material')
  i866.m_Maskable = !!i867[87]
  i866.m_Color = new pc.Color(i867[88], i867[89], i867[90], i867[91])
  i866.m_RaycastTarget = !!i867[92]
  i866.m_RaycastPadding = new pc.Vec4( i867[93], i867[94], i867[95], i867[96] )
  return i866
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Button' )
  var i873 = data
  i872.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i873[0], i872.m_OnClick)
  i872.m_Navigation = request.d('UnityEngine.UI.Navigation', i873[1], i872.m_Navigation)
  i872.m_Transition = i873[2]
  i872.m_Colors = request.d('UnityEngine.UI.ColorBlock', i873[3], i872.m_Colors)
  i872.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i873[4], i872.m_SpriteState)
  i872.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i873[5], i872.m_AnimationTriggers)
  i872.m_Interactable = !!i873[6]
  request.r(i873[7], i873[8], 0, i872, 'm_TargetGraphic')
  return i872
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i875 = data
  i874.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i875[0], i874.m_PersistentCalls)
  return i874
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i877 = data
  i876.m_Mode = i877[0]
  i876.m_WrapAround = !!i877[1]
  request.r(i877[2], i877[3], 0, i876, 'm_SelectOnUp')
  request.r(i877[4], i877[5], 0, i876, 'm_SelectOnDown')
  request.r(i877[6], i877[7], 0, i876, 'm_SelectOnLeft')
  request.r(i877[8], i877[9], 0, i876, 'm_SelectOnRight')
  return i876
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i879 = data
  i878.m_NormalColor = new pc.Color(i879[0], i879[1], i879[2], i879[3])
  i878.m_HighlightedColor = new pc.Color(i879[4], i879[5], i879[6], i879[7])
  i878.m_PressedColor = new pc.Color(i879[8], i879[9], i879[10], i879[11])
  i878.m_SelectedColor = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  i878.m_DisabledColor = new pc.Color(i879[16], i879[17], i879[18], i879[19])
  i878.m_ColorMultiplier = i879[20]
  i878.m_FadeDuration = i879[21]
  return i878
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'm_HighlightedSprite')
  request.r(i881[2], i881[3], 0, i880, 'm_PressedSprite')
  request.r(i881[4], i881[5], 0, i880, 'm_SelectedSprite')
  request.r(i881[6], i881[7], 0, i880, 'm_DisabledSprite')
  return i880
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i883 = data
  i882.m_NormalTrigger = i883[0]
  i882.m_HighlightedTrigger = i883[1]
  i882.m_PressedTrigger = i883[2]
  i882.m_SelectedTrigger = i883[3]
  i882.m_DisabledTrigger = i883[4]
  return i882
}

Deserializers["BtnReset"] = function (request, data, root) {
  var i884 = root || request.c( 'BtnReset' )
  var i885 = data
  return i884
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Text' )
  var i887 = data
  i886.m_FontData = request.d('UnityEngine.UI.FontData', i887[0], i886.m_FontData)
  i886.m_Text = i887[1]
  request.r(i887[2], i887[3], 0, i886, 'm_Material')
  i886.m_Maskable = !!i887[4]
  i886.m_Color = new pc.Color(i887[5], i887[6], i887[7], i887[8])
  i886.m_RaycastTarget = !!i887[9]
  i886.m_RaycastPadding = new pc.Vec4( i887[10], i887[11], i887[12], i887[13] )
  return i886
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.FontData' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_Font')
  i888.m_FontSize = i889[2]
  i888.m_FontStyle = i889[3]
  i888.m_BestFit = !!i889[4]
  i888.m_MinSize = i889[5]
  i888.m_MaxSize = i889[6]
  i888.m_Alignment = i889[7]
  i888.m_AlignByGeometry = !!i889[8]
  i888.m_RichText = !!i889[9]
  i888.m_HorizontalOverflow = i889[10]
  i888.m_VerticalOverflow = i889[11]
  i888.m_LineSpacing = i889[12]
  return i888
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_FirstSelected')
  i890.m_sendNavigationEvents = !!i891[2]
  i890.m_DragThreshold = i891[3]
  return i890
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i893 = data
  i892.m_MoveRepeatDelay = i893[0]
  i892.m_MoveRepeatRate = i893[1]
  request.r(i893[2], i893[3], 0, i892, 'm_XRTrackingOrigin')
  request.r(i893[4], i893[5], 0, i892, 'm_ActionsAsset')
  request.r(i893[6], i893[7], 0, i892, 'm_PointAction')
  request.r(i893[8], i893[9], 0, i892, 'm_MoveAction')
  request.r(i893[10], i893[11], 0, i892, 'm_SubmitAction')
  request.r(i893[12], i893[13], 0, i892, 'm_CancelAction')
  request.r(i893[14], i893[15], 0, i892, 'm_LeftClickAction')
  request.r(i893[16], i893[17], 0, i892, 'm_MiddleClickAction')
  request.r(i893[18], i893[19], 0, i892, 'm_RightClickAction')
  request.r(i893[20], i893[21], 0, i892, 'm_ScrollWheelAction')
  request.r(i893[22], i893[23], 0, i892, 'm_TrackedDevicePositionAction')
  request.r(i893[24], i893[25], 0, i892, 'm_TrackedDeviceOrientationAction')
  i892.m_DeselectOnBackgroundClick = !!i893[26]
  i892.m_PointerBehavior = i893[27]
  i892.m_CursorLockBehavior = i893[28]
  i892.m_ScrollDeltaPerTick = i893[29]
  i892.m_SendPointerHoverToParent = !!i893[30]
  return i892
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i894 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_LookAt')
  request.r(i895[2], i895[3], 0, i894, 'm_Follow')
  i894.m_Lens = request.d('Cinemachine.LensSettings', i895[4], i894.m_Lens)
  i894.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i895[5], i894.m_Transitions)
  var i897 = i895[6]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i894.m_ExcludedPropertiesInInspector = i896
  var i899 = i895[7]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i894.m_LockStageInInspector = i898
  i894.m_Priority = i895[8]
  i894.m_StandbyUpdate = i895[9]
  i894.m_LegacyBlendHint = i895[10]
  request.r(i895[11], i895[12], 0, i894, 'm_ComponentOwner')
  i894.m_StreamingVersion = i895[13]
  return i894
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Cinemachine.LensSettings' )
  var i901 = data
  i900.FieldOfView = i901[0]
  i900.OrthographicSize = i901[1]
  i900.NearClipPlane = i901[2]
  i900.FarClipPlane = i901[3]
  i900.Dutch = i901[4]
  i900.ModeOverride = i901[5]
  i900.LensShift = new pc.Vec2( i901[6], i901[7] )
  i900.GateFit = i901[8]
  i900.FocusDistance = i901[9]
  i900.m_SensorSize = new pc.Vec2( i901[10], i901[11] )
  return i900
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i902 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i903 = data
  i902.m_BlendHint = i903[0]
  i902.m_InheritPosition = !!i903[1]
  i902.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i903[2], i902.m_OnCameraLive)
  return i902
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i908 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i909 = data
  return i908
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i910 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i911 = data
  i910.m_BindingMode = i911[0]
  i910.m_FollowOffset = new pc.Vec3( i911[1], i911[2], i911[3] )
  i910.m_XDamping = i911[4]
  i910.m_YDamping = i911[5]
  i910.m_ZDamping = i911[6]
  i910.m_AngularDampingMode = i911[7]
  i910.m_PitchDamping = i911[8]
  i910.m_YawDamping = i911[9]
  i910.m_RollDamping = i911[10]
  i910.m_AngularDamping = i911[11]
  return i910
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i912 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i913 = data
  i912.m_TrackedObjectOffset = new pc.Vec3( i913[0], i913[1], i913[2] )
  i912.m_LookaheadTime = i913[3]
  i912.m_LookaheadSmoothing = i913[4]
  i912.m_LookaheadIgnoreY = !!i913[5]
  i912.m_HorizontalDamping = i913[6]
  i912.m_VerticalDamping = i913[7]
  i912.m_ScreenX = i913[8]
  i912.m_ScreenY = i913[9]
  i912.m_DeadZoneWidth = i913[10]
  i912.m_DeadZoneHeight = i913[11]
  i912.m_SoftZoneWidth = i913[12]
  i912.m_SoftZoneHeight = i913[13]
  i912.m_BiasX = i913[14]
  i912.m_BiasY = i913[15]
  i912.m_CenterOnActivate = !!i913[16]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i915 = data
  i914.ambientIntensity = i915[0]
  i914.reflectionIntensity = i915[1]
  i914.ambientMode = i915[2]
  i914.ambientLight = new pc.Color(i915[3], i915[4], i915[5], i915[6])
  i914.ambientSkyColor = new pc.Color(i915[7], i915[8], i915[9], i915[10])
  i914.ambientGroundColor = new pc.Color(i915[11], i915[12], i915[13], i915[14])
  i914.ambientEquatorColor = new pc.Color(i915[15], i915[16], i915[17], i915[18])
  i914.fogColor = new pc.Color(i915[19], i915[20], i915[21], i915[22])
  i914.fogEndDistance = i915[23]
  i914.fogStartDistance = i915[24]
  i914.fogDensity = i915[25]
  i914.fog = !!i915[26]
  request.r(i915[27], i915[28], 0, i914, 'skybox')
  i914.fogMode = i915[29]
  var i917 = i915[30]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i917[i + 0]) );
  }
  i914.lightmaps = i916
  i914.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i915[31], i914.lightProbes)
  i914.lightmapsMode = i915[32]
  i914.mixedBakeMode = i915[33]
  i914.environmentLightingMode = i915[34]
  i914.ambientProbe = new pc.SphericalHarmonicsL2(i915[35])
  i914.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i915[36])
  i914.useReferenceAmbientProbe = !!i915[37]
  request.r(i915[38], i915[39], 0, i914, 'customReflection')
  request.r(i915[40], i915[41], 0, i914, 'defaultReflection')
  i914.defaultReflectionMode = i915[42]
  i914.defaultReflectionResolution = i915[43]
  i914.sunLightObjectId = i915[44]
  i914.pixelLightCount = i915[45]
  i914.defaultReflectionHDR = !!i915[46]
  i914.hasLightDataAsset = !!i915[47]
  i914.hasManualGenerate = !!i915[48]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'lightmapColor')
  request.r(i921[2], i921[3], 0, i920, 'lightmapDirection')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i922 = root || new UnityEngine.LightProbes()
  var i923 = data
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i931[i + 0]));
  }
  i928.ShaderCompilationErrors = i930
  i928.name = i929[1]
  i928.guid = i929[2]
  var i933 = i929[3]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i928.shaderDefinedKeywords = i932
  var i935 = i929[4]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i935[i + 0]) );
  }
  i928.passes = i934
  var i937 = i929[5]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i937[i + 0]) );
  }
  i928.usePasses = i936
  var i939 = i929[6]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i939[i + 0]) );
  }
  i928.defaultParameterValues = i938
  request.r(i929[7], i929[8], 0, i928, 'unityFallbackShader')
  i928.readDepth = !!i929[9]
  i928.isCreatedByShaderGraph = !!i929[10]
  i928.usedBatchUniforms = i929[11]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i943 = data
  i942.shaderName = i943[0]
  i942.errorMessage = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i946 = root || new pc.UnityShaderPass()
  var i947 = data
  i946.id = i947[0]
  i946.subShaderIndex = i947[1]
  i946.name = i947[2]
  i946.passType = i947[3]
  i946.grabPassTextureName = i947[4]
  i946.usePass = !!i947[5]
  i946.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[6], i946.zTest)
  i946.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[7], i946.zWrite)
  i946.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[8], i946.culling)
  i946.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i947[9], i946.blending)
  i946.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i947[10], i946.alphaBlending)
  i946.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[11], i946.colorWriteMask)
  i946.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[12], i946.offsetUnits)
  i946.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[13], i946.offsetFactor)
  i946.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[14], i946.stencilRef)
  i946.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[15], i946.stencilReadMask)
  i946.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[16], i946.stencilWriteMask)
  i946.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[17], i946.stencilOp)
  i946.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[18], i946.stencilOpFront)
  i946.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[19], i946.stencilOpBack)
  var i949 = i947[20]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i949[i + 0]) );
  }
  i946.tags = i948
  var i951 = i947[21]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.passDefinedKeywords = i950
  var i953 = i947[22]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i953[i + 0]) );
  }
  i946.passDefinedKeywordGroups = i952
  var i955 = i947[23]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i955[i + 0]) );
  }
  i946.variants = i954
  var i957 = i947[24]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i957[i + 0]) );
  }
  i946.excludedVariants = i956
  i946.hasDepthReader = !!i947[25]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i959 = data
  i958.val = i959[0]
  i958.name = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i961 = data
  i960.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[0], i960.src)
  i960.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[1], i960.dst)
  i960.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[2], i960.op)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i963 = data
  i962.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[0], i962.pass)
  i962.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[1], i962.fail)
  i962.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[2], i962.zFail)
  i962.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[3], i962.comp)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i967 = data
  i966.name = i967[0]
  i966.value = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i970.keywords = i972
  i970.hasDiscard = !!i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i977 = data
  i976.passId = i977[0]
  i976.subShaderIndex = i977[1]
  var i979 = i977[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i976.keywords = i978
  i976.vertexProgram = i977[3]
  i976.fragmentProgram = i977[4]
  i976.compiledForWebGL2 = !!i977[5]
  i976.readDepth = !!i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'shader')
  i982.pass = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i987 = data
  i986.name = i987[0]
  i986.type = i987[1]
  i986.value = new pc.Vec4( i987[2], i987[3], i987[4], i987[5] )
  i986.textureValue = i987[6]
  i986.shaderPropertyFlag = i987[7]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i989 = data
  i988.name = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'texture')
  i988.aabb = i989[3]
  i988.vertices = i989[4]
  i988.triangles = i989[5]
  i988.textureRect = UnityEngine.Rect.MinMaxRect(i989[6], i989[7], i989[8], i989[9])
  i988.packedRect = UnityEngine.Rect.MinMaxRect(i989[10], i989[11], i989[12], i989[13])
  i988.border = new pc.Vec4( i989[14], i989[15], i989[16], i989[17] )
  i988.transparency = i989[18]
  i988.bounds = i989[19]
  i988.pixelsPerUnit = i989[20]
  i988.textureWidth = i989[21]
  i988.textureHeight = i989[22]
  i988.nativeSize = new pc.Vec2( i989[23], i989[24] )
  i988.pivot = new pc.Vec2( i989[25], i989[26] )
  i988.textureRectOffset = new pc.Vec2( i989[27], i989[28] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i991 = data
  i990.name = i991[0]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i993 = data
  i992.name = i993[0]
  i992.ascent = i993[1]
  i992.originalLineHeight = i993[2]
  i992.fontSize = i993[3]
  var i995 = i993[4]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i995[i + 0]) );
  }
  i992.characterInfo = i994
  request.r(i993[5], i993[6], 0, i992, 'texture')
  i992.originalFontSize = i993[7]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i999 = data
  i998.index = i999[0]
  i998.advance = i999[1]
  i998.bearing = i999[2]
  i998.glyphWidth = i999[3]
  i998.glyphHeight = i999[4]
  i998.minX = i999[5]
  i998.maxX = i999[6]
  i998.minY = i999[7]
  i998.maxY = i999[8]
  i998.uvBottomLeftX = i999[9]
  i998.uvBottomLeftY = i999[10]
  i998.uvBottomRightX = i999[11]
  i998.uvBottomRightY = i999[12]
  i998.uvTopLeftX = i999[13]
  i998.uvTopLeftY = i999[14]
  i998.uvTopRightX = i999[15]
  i998.uvTopRightY = i999[16]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.bytes64 = i1001[1]
  i1000.data = i1001[2]
  return i1000
}

Deserializers["CarData"] = function (request, data, root) {
  var i1002 = root || request.c( 'CarData' )
  var i1003 = data
  i1002.Gravity = i1003[0]
  i1002.MaxSpeed = i1003[1]
  i1002.MaxAngleToDrift = i1003[2]
  i1002.MaxSteerAngle = i1003[3]
  i1002.SteerSensitivity = i1003[4]
  i1002.DriftTraction = i1003[5]
  i1002.FrictionNormal = i1003[6]
  i1002.DriftFriction = i1003[7]
  return i1002
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1005 = data
  i1004.hashCode = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'material')
  i1004.materialHashCode = i1005[3]
  request.r(i1005[4], i1005[5], 0, i1004, 'atlas')
  i1004.normalStyle = i1005[6]
  i1004.normalSpacingOffset = i1005[7]
  i1004.boldStyle = i1005[8]
  i1004.boldSpacing = i1005[9]
  i1004.italicStyle = i1005[10]
  i1004.tabSize = i1005[11]
  i1004.m_Version = i1005[12]
  i1004.m_SourceFontFileGUID = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'm_SourceFontFile_EditorRef')
  request.r(i1005[16], i1005[17], 0, i1004, 'm_SourceFontFile')
  i1004.m_AtlasPopulationMode = i1005[18]
  i1004.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1005[19], i1004.m_FaceInfo)
  var i1007 = i1005[20]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('UnityEngine.TextCore.Glyph', i1007[i + 0]));
  }
  i1004.m_GlyphTable = i1006
  var i1009 = i1005[21]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Character', i1009[i + 0]));
  }
  i1004.m_CharacterTable = i1008
  var i1011 = i1005[22]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1004.m_AtlasTextures = i1010
  i1004.m_AtlasTextureIndex = i1005[23]
  i1004.m_IsMultiAtlasTexturesEnabled = !!i1005[24]
  i1004.m_ClearDynamicDataOnBuild = !!i1005[25]
  var i1013 = i1005[26]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('UnityEngine.TextCore.GlyphRect', i1013[i + 0]));
  }
  i1004.m_UsedGlyphRects = i1012
  var i1015 = i1005[27]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('UnityEngine.TextCore.GlyphRect', i1015[i + 0]));
  }
  i1004.m_FreeGlyphRects = i1014
  i1004.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1005[28], i1004.m_fontInfo)
  i1004.m_AtlasWidth = i1005[29]
  i1004.m_AtlasHeight = i1005[30]
  i1004.m_AtlasPadding = i1005[31]
  i1004.m_AtlasRenderMode = i1005[32]
  var i1017 = i1005[33]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.TMP_Glyph', i1017[i + 0]));
  }
  i1004.m_glyphInfoList = i1016
  i1004.m_KerningTable = request.d('TMPro.KerningTable', i1005[34], i1004.m_KerningTable)
  i1004.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1005[35], i1004.m_FontFeatureTable)
  var i1019 = i1005[36]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1004.fallbackFontAssets = i1018
  var i1021 = i1005[37]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1004.m_FallbackFontAssetTable = i1020
  i1004.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1005[38], i1004.m_CreationSettings)
  var i1023 = i1005[39]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('TMPro.TMP_FontWeightPair', i1023[i + 0]) );
  }
  i1004.m_FontWeightTable = i1022
  var i1025 = i1005[40]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('TMPro.TMP_FontWeightPair', i1025[i + 0]) );
  }
  i1004.fontWeights = i1024
  return i1004
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1027 = data
  i1026.m_FaceIndex = i1027[0]
  i1026.m_FamilyName = i1027[1]
  i1026.m_StyleName = i1027[2]
  i1026.m_PointSize = i1027[3]
  i1026.m_Scale = i1027[4]
  i1026.m_UnitsPerEM = i1027[5]
  i1026.m_LineHeight = i1027[6]
  i1026.m_AscentLine = i1027[7]
  i1026.m_CapLine = i1027[8]
  i1026.m_MeanLine = i1027[9]
  i1026.m_Baseline = i1027[10]
  i1026.m_DescentLine = i1027[11]
  i1026.m_SuperscriptOffset = i1027[12]
  i1026.m_SuperscriptSize = i1027[13]
  i1026.m_SubscriptOffset = i1027[14]
  i1026.m_SubscriptSize = i1027[15]
  i1026.m_UnderlineOffset = i1027[16]
  i1026.m_UnderlineThickness = i1027[17]
  i1026.m_StrikethroughOffset = i1027[18]
  i1026.m_StrikethroughThickness = i1027[19]
  i1026.m_TabWidth = i1027[20]
  return i1026
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1031 = data
  i1030.m_Index = i1031[0]
  i1030.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1031[1], i1030.m_Metrics)
  i1030.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1031[2], i1030.m_GlyphRect)
  i1030.m_Scale = i1031[3]
  i1030.m_AtlasIndex = i1031[4]
  i1030.m_ClassDefinitionType = i1031[5]
  return i1030
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1033 = data
  i1032.m_Width = i1033[0]
  i1032.m_Height = i1033[1]
  i1032.m_HorizontalBearingX = i1033[2]
  i1032.m_HorizontalBearingY = i1033[3]
  i1032.m_HorizontalAdvance = i1033[4]
  return i1032
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1035 = data
  i1034.m_X = i1035[0]
  i1034.m_Y = i1035[1]
  i1034.m_Width = i1035[2]
  i1034.m_Height = i1035[3]
  return i1034
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Character' )
  var i1039 = data
  i1038.m_ElementType = i1039[0]
  i1038.m_Unicode = i1039[1]
  i1038.m_GlyphIndex = i1039[2]
  i1038.m_Scale = i1039[3]
  return i1038
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1045 = data
  i1044.Name = i1045[0]
  i1044.PointSize = i1045[1]
  i1044.Scale = i1045[2]
  i1044.CharacterCount = i1045[3]
  i1044.LineHeight = i1045[4]
  i1044.Baseline = i1045[5]
  i1044.Ascender = i1045[6]
  i1044.CapHeight = i1045[7]
  i1044.Descender = i1045[8]
  i1044.CenterLine = i1045[9]
  i1044.SuperscriptOffset = i1045[10]
  i1044.SubscriptOffset = i1045[11]
  i1044.SubSize = i1045[12]
  i1044.Underline = i1045[13]
  i1044.UnderlineThickness = i1045[14]
  i1044.strikethrough = i1045[15]
  i1044.strikethroughThickness = i1045[16]
  i1044.TabWidth = i1045[17]
  i1044.Padding = i1045[18]
  i1044.AtlasWidth = i1045[19]
  i1044.AtlasHeight = i1045[20]
  return i1044
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1049 = data
  i1048.id = i1049[0]
  i1048.x = i1049[1]
  i1048.y = i1049[2]
  i1048.width = i1049[3]
  i1048.height = i1049[4]
  i1048.xOffset = i1049[5]
  i1048.yOffset = i1049[6]
  i1048.xAdvance = i1049[7]
  i1048.scale = i1049[8]
  return i1048
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.KerningTable' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.KerningPair', i1053[i + 0]));
  }
  i1050.kerningPairs = i1052
  return i1050
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.KerningPair' )
  var i1057 = data
  i1056.xOffset = i1057[0]
  i1056.m_FirstGlyph = i1057[1]
  i1056.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[2], i1056.m_FirstGlyphAdjustments)
  i1056.m_SecondGlyph = i1057[3]
  i1056.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[4], i1056.m_SecondGlyphAdjustments)
  i1056.m_IgnoreSpacingAdjustments = !!i1057[5]
  return i1056
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1061[i + 0]));
  }
  i1058.m_GlyphPairAdjustmentRecords = i1060
  return i1058
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1065 = data
  i1064.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[0], i1064.m_FirstAdjustmentRecord)
  i1064.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[1], i1064.m_SecondAdjustmentRecord)
  i1064.m_FeatureLookupFlags = i1065[2]
  return i1064
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1067 = data
  i1066.m_GlyphIndex = i1067[0]
  i1066.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1067[1], i1066.m_GlyphValueRecord)
  return i1066
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1069 = data
  i1068.m_XPlacement = i1069[0]
  i1068.m_YPlacement = i1069[1]
  i1068.m_XAdvance = i1069[2]
  i1068.m_YAdvance = i1069[3]
  return i1068
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1073 = data
  i1072.sourceFontFileName = i1073[0]
  i1072.sourceFontFileGUID = i1073[1]
  i1072.pointSizeSamplingMode = i1073[2]
  i1072.pointSize = i1073[3]
  i1072.padding = i1073[4]
  i1072.packingMode = i1073[5]
  i1072.atlasWidth = i1073[6]
  i1072.atlasHeight = i1073[7]
  i1072.characterSetSelectionMode = i1073[8]
  i1072.characterSequence = i1073[9]
  i1072.referencedFontAssetGUID = i1073[10]
  i1072.referencedTextAssetGUID = i1073[11]
  i1072.fontStyle = i1073[12]
  i1072.fontStyleModifier = i1073[13]
  i1072.renderMode = i1073[14]
  i1072.includeFontFeatures = !!i1073[15]
  return i1072
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'regularTypeface')
  request.r(i1077[2], i1077[3], 0, i1076, 'italicTypeface')
  return i1076
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('UnityEngine.InputSystem.InputActionMap', i1081[i + 0]) );
  }
  i1078.m_ActionMaps = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1083[i + 0]) );
  }
  i1078.m_ControlSchemes = i1082
  i1078.m_IsProjectWide = !!i1079[2]
  return i1078
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1087 = data
  i1086.m_Name = i1087[0]
  i1086.m_Id = i1087[1]
  request.r(i1087[2], i1087[3], 0, i1086, 'm_Asset')
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('UnityEngine.InputSystem.InputAction', i1089[i + 0]) );
  }
  i1086.m_Actions = i1088
  var i1091 = i1087[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('UnityEngine.InputSystem.InputBinding', i1091[i + 0]) );
  }
  i1086.m_Bindings = i1090
  return i1086
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1095 = data
  i1094.m_Name = i1095[0]
  i1094.m_Type = i1095[1]
  i1094.m_ExpectedControlType = i1095[2]
  i1094.m_Id = i1095[3]
  i1094.m_Processors = i1095[4]
  i1094.m_Interactions = i1095[5]
  var i1097 = i1095[6]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('UnityEngine.InputSystem.InputBinding', i1097[i + 0]) );
  }
  i1094.m_SingletonActionBindings = i1096
  i1094.m_Flags = i1095[7]
  return i1094
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1101 = data
  i1100.m_Name = i1101[0]
  i1100.m_Id = i1101[1]
  i1100.m_Path = i1101[2]
  i1100.m_Interactions = i1101[3]
  i1100.m_Processors = i1101[4]
  i1100.m_Groups = i1101[5]
  i1100.m_Action = i1101[6]
  i1100.m_Flags = i1101[7]
  return i1100
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1105 = data
  i1104.m_Name = i1105[0]
  i1104.m_BindingGroup = i1105[1]
  var i1107 = i1105[2]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1107[i + 0]) );
  }
  i1104.m_DeviceRequirements = i1106
  return i1104
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1111 = data
  i1110.m_ControlPath = i1111[0]
  i1110.m_Flags = i1111[1]
  return i1110
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'm_Asset')
  i1112.m_ActionId = i1113[2]
  return i1112
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1115 = data
  i1114.useSafeMode = !!i1115[0]
  i1114.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1115[1], i1114.safeModeOptions)
  i1114.timeScale = i1115[2]
  i1114.unscaledTimeScale = i1115[3]
  i1114.useSmoothDeltaTime = !!i1115[4]
  i1114.maxSmoothUnscaledTime = i1115[5]
  i1114.rewindCallbackMode = i1115[6]
  i1114.showUnityEditorReport = !!i1115[7]
  i1114.logBehaviour = i1115[8]
  i1114.drawGizmos = !!i1115[9]
  i1114.defaultRecyclable = !!i1115[10]
  i1114.defaultAutoPlay = i1115[11]
  i1114.defaultUpdateType = i1115[12]
  i1114.defaultTimeScaleIndependent = !!i1115[13]
  i1114.defaultEaseType = i1115[14]
  i1114.defaultEaseOvershootOrAmplitude = i1115[15]
  i1114.defaultEasePeriod = i1115[16]
  i1114.defaultAutoKill = !!i1115[17]
  i1114.defaultLoopType = i1115[18]
  i1114.debugMode = !!i1115[19]
  i1114.debugStoreTargetId = !!i1115[20]
  i1114.showPreviewPanel = !!i1115[21]
  i1114.storeSettingsLocation = i1115[22]
  i1114.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1115[23], i1114.modules)
  i1114.createASMDEF = !!i1115[24]
  i1114.showPlayingTweens = !!i1115[25]
  i1114.showPausedTweens = !!i1115[26]
  return i1114
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1117 = data
  i1116.logBehaviour = i1117[0]
  i1116.nestedTweenFailureBehaviour = i1117[1]
  return i1116
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1119 = data
  i1118.showPanel = !!i1119[0]
  i1118.audioEnabled = !!i1119[1]
  i1118.physicsEnabled = !!i1119[2]
  i1118.physics2DEnabled = !!i1119[3]
  i1118.spriteEnabled = !!i1119[4]
  i1118.uiEnabled = !!i1119[5]
  i1118.textMeshProEnabled = !!i1119[6]
  i1118.tk2DEnabled = !!i1119[7]
  i1118.deAudioEnabled = !!i1119[8]
  i1118.deUnityExtendedEnabled = !!i1119[9]
  i1118.epoOutlineEnabled = !!i1119[10]
  return i1118
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_Settings' )
  var i1121 = data
  i1120.m_enableWordWrapping = !!i1121[0]
  i1120.m_enableKerning = !!i1121[1]
  i1120.m_enableExtraPadding = !!i1121[2]
  i1120.m_enableTintAllSprites = !!i1121[3]
  i1120.m_enableParseEscapeCharacters = !!i1121[4]
  i1120.m_EnableRaycastTarget = !!i1121[5]
  i1120.m_GetFontFeaturesAtRuntime = !!i1121[6]
  i1120.m_missingGlyphCharacter = i1121[7]
  i1120.m_warningsDisabled = !!i1121[8]
  request.r(i1121[9], i1121[10], 0, i1120, 'm_defaultFontAsset')
  i1120.m_defaultFontAssetPath = i1121[11]
  i1120.m_defaultFontSize = i1121[12]
  i1120.m_defaultAutoSizeMinRatio = i1121[13]
  i1120.m_defaultAutoSizeMaxRatio = i1121[14]
  i1120.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1121[15], i1121[16] )
  i1120.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1121[17], i1121[18] )
  i1120.m_autoSizeTextContainer = !!i1121[19]
  i1120.m_IsTextObjectScaleStatic = !!i1121[20]
  var i1123 = i1121[21]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1120.m_fallbackFontAssets = i1122
  i1120.m_matchMaterialPreset = !!i1121[22]
  request.r(i1121[23], i1121[24], 0, i1120, 'm_defaultSpriteAsset')
  i1120.m_defaultSpriteAssetPath = i1121[25]
  i1120.m_enableEmojiSupport = !!i1121[26]
  i1120.m_MissingCharacterSpriteUnicode = i1121[27]
  i1120.m_defaultColorGradientPresetsPath = i1121[28]
  request.r(i1121[29], i1121[30], 0, i1120, 'm_defaultStyleSheet')
  i1120.m_StyleSheetsResourcePath = i1121[31]
  request.r(i1121[32], i1121[33], 0, i1120, 'm_leadingCharacters')
  request.r(i1121[34], i1121[35], 0, i1120, 'm_followingCharacters')
  i1120.m_UseModernHangulLineBreakingRules = !!i1121[36]
  return i1120
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1125 = data
  i1124.hashCode = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'material')
  i1124.materialHashCode = i1125[3]
  request.r(i1125[4], i1125[5], 0, i1124, 'spriteSheet')
  var i1127 = i1125[6]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_Sprite', i1127[i + 0]));
  }
  i1124.spriteInfoList = i1126
  var i1129 = i1125[7]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1124.fallbackSpriteAssets = i1128
  i1124.m_Version = i1125[8]
  i1124.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1125[9], i1124.m_FaceInfo)
  var i1131 = i1125[10]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_SpriteCharacter', i1131[i + 0]));
  }
  i1124.m_SpriteCharacterTable = i1130
  var i1133 = i1125[11]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('TMPro.TMP_SpriteGlyph', i1133[i + 0]));
  }
  i1124.m_SpriteGlyphTable = i1132
  return i1124
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.hashCode = i1137[1]
  i1136.unicode = i1137[2]
  i1136.pivot = new pc.Vec2( i1137[3], i1137[4] )
  request.r(i1137[5], i1137[6], 0, i1136, 'sprite')
  i1136.id = i1137[7]
  i1136.x = i1137[8]
  i1136.y = i1137[9]
  i1136.width = i1137[10]
  i1136.height = i1137[11]
  i1136.xOffset = i1137[12]
  i1136.yOffset = i1137[13]
  i1136.xAdvance = i1137[14]
  i1136.scale = i1137[15]
  return i1136
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1143 = data
  i1142.m_Name = i1143[0]
  i1142.m_HashCode = i1143[1]
  i1142.m_ElementType = i1143[2]
  i1142.m_Unicode = i1143[3]
  i1142.m_GlyphIndex = i1143[4]
  i1142.m_Scale = i1143[5]
  return i1142
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'sprite')
  i1146.m_Index = i1147[2]
  i1146.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1147[3], i1146.m_Metrics)
  i1146.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1147[4], i1146.m_GlyphRect)
  i1146.m_Scale = i1147[5]
  i1146.m_AtlasIndex = i1147[6]
  i1146.m_ClassDefinitionType = i1147[7]
  return i1146
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_Style', i1151[i + 0]));
  }
  i1148.m_StyleList = i1150
  return i1148
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_Style' )
  var i1155 = data
  i1154.m_Name = i1155[0]
  i1154.m_HashCode = i1155[1]
  i1154.m_OpeningDefinition = i1155[2]
  i1154.m_ClosingDefinition = i1155[3]
  i1154.m_OpeningTagArray = i1155[4]
  i1154.m_ClosingTagArray = i1155[5]
  i1154.m_OpeningTagUnicodeArray = i1155[6]
  i1154.m_ClosingTagUnicodeArray = i1155[7]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1159[i + 0]) );
  }
  i1156.files = i1158
  i1156.componentToPrefabIds = i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1163 = data
  i1162.path = i1163[0]
  request.r(i1163[1], i1163[2], 0, i1162, 'unityObject')
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1167[i + 0]) );
  }
  i1164.scriptsExecutionOrder = i1166
  var i1169 = i1165[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1169[i + 0]) );
  }
  i1164.sortingLayers = i1168
  var i1171 = i1165[2]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1171[i + 0]) );
  }
  i1164.cullingLayers = i1170
  i1164.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1165[3], i1164.timeSettings)
  i1164.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1165[4], i1164.physicsSettings)
  i1164.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1165[5], i1164.physics2DSettings)
  i1164.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1165[6], i1164.qualitySettings)
  i1164.enableRealtimeShadows = !!i1165[7]
  i1164.enableAutoInstancing = !!i1165[8]
  i1164.enableDynamicBatching = !!i1165[9]
  i1164.lightmapEncodingQuality = i1165[10]
  i1164.desiredColorSpace = i1165[11]
  var i1173 = i1165[12]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1164.allTags = i1172
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.value = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.value = i1181[2]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1187 = data
  i1186.fixedDeltaTime = i1187[0]
  i1186.maximumDeltaTime = i1187[1]
  i1186.timeScale = i1187[2]
  i1186.maximumParticleTimestep = i1187[3]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1189 = data
  i1188.gravity = new pc.Vec3( i1189[0], i1189[1], i1189[2] )
  i1188.defaultSolverIterations = i1189[3]
  i1188.bounceThreshold = i1189[4]
  i1188.autoSyncTransforms = !!i1189[5]
  i1188.autoSimulation = !!i1189[6]
  var i1191 = i1189[7]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1191[i + 0]) );
  }
  i1188.collisionMatrix = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1195 = data
  i1194.enabled = !!i1195[0]
  i1194.layerId = i1195[1]
  i1194.otherLayerId = i1195[2]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'material')
  i1196.gravity = new pc.Vec2( i1197[2], i1197[3] )
  i1196.positionIterations = i1197[4]
  i1196.velocityIterations = i1197[5]
  i1196.velocityThreshold = i1197[6]
  i1196.maxLinearCorrection = i1197[7]
  i1196.maxAngularCorrection = i1197[8]
  i1196.maxTranslationSpeed = i1197[9]
  i1196.maxRotationSpeed = i1197[10]
  i1196.baumgarteScale = i1197[11]
  i1196.baumgarteTOIScale = i1197[12]
  i1196.timeToSleep = i1197[13]
  i1196.linearSleepTolerance = i1197[14]
  i1196.angularSleepTolerance = i1197[15]
  i1196.defaultContactOffset = i1197[16]
  i1196.autoSimulation = !!i1197[17]
  i1196.queriesHitTriggers = !!i1197[18]
  i1196.queriesStartInColliders = !!i1197[19]
  i1196.callbacksOnDisable = !!i1197[20]
  i1196.reuseCollisionCallbacks = !!i1197[21]
  i1196.autoSyncTransforms = !!i1197[22]
  var i1199 = i1197[23]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1199[i + 0]) );
  }
  i1196.collisionMatrix = i1198
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1203 = data
  i1202.enabled = !!i1203[0]
  i1202.layerId = i1203[1]
  i1202.otherLayerId = i1203[2]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1207[i + 0]) );
  }
  i1204.qualityLevels = i1206
  var i1209 = i1205[1]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( i1209[i + 0] );
  }
  i1204.names = i1208
  i1204.shadows = i1205[2]
  i1204.anisotropicFiltering = i1205[3]
  i1204.antiAliasing = i1205[4]
  i1204.lodBias = i1205[5]
  i1204.shadowCascades = i1205[6]
  i1204.shadowDistance = i1205[7]
  i1204.shadowmaskMode = i1205[8]
  i1204.shadowProjection = i1205[9]
  i1204.shadowResolution = i1205[10]
  i1204.softParticles = !!i1205[11]
  i1204.softVegetation = !!i1205[12]
  i1204.activeColorSpace = i1205[13]
  i1204.desiredColorSpace = i1205[14]
  i1204.masterTextureLimit = i1205[15]
  i1204.maxQueuedFrames = i1205[16]
  i1204.particleRaycastBudget = i1205[17]
  i1204.pixelLightCount = i1205[18]
  i1204.realtimeReflectionProbes = !!i1205[19]
  i1204.shadowCascade2Split = i1205[20]
  i1204.shadowCascade4Split = new pc.Vec3( i1205[21], i1205[22], i1205[23] )
  i1204.streamingMipmapsActive = !!i1205[24]
  i1204.vSyncCount = i1205[25]
  i1204.asyncUploadBufferSize = i1205[26]
  i1204.asyncUploadTimeSlice = i1205[27]
  i1204.billboardsFaceCameraPosition = !!i1205[28]
  i1204.shadowNearPlaneOffset = i1205[29]
  i1204.streamingMipmapsMemoryBudget = i1205[30]
  i1204.maximumLODLevel = i1205[31]
  i1204.streamingMipmapsAddAllCameras = !!i1205[32]
  i1204.streamingMipmapsMaxLevelReduction = i1205[33]
  i1204.streamingMipmapsRenderersPerFrame = i1205[34]
  i1204.resolutionScalingFixedDPIFactor = i1205[35]
  i1204.streamingMipmapsMaxFileIORequests = i1205[36]
  i1204.currentQualityLevel = i1205[37]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1215 = data
  i1214.weight = i1215[0]
  i1214.vertices = i1215[1]
  i1214.normals = i1215[2]
  i1214.tangents = i1215[3]
  return i1214
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'm_ObjectArgument')
  i1216.m_ObjectArgumentAssemblyTypeName = i1217[2]
  i1216.m_IntArgument = i1217[3]
  i1216.m_FloatArgument = i1217[4]
  i1216.m_StringArgument = i1217[5]
  i1216.m_BoolArgument = !!i1217[6]
  return i1216
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1219 = data
  i1218.xPlacement = i1219[0]
  i1218.yPlacement = i1219[1]
  i1218.xAdvance = i1219[2]
  i1218.yAdvance = i1219[3]
  return i1218
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[15],"73":[22],"74":[22],"75":[22],"76":[22],"77":[22],"78":[22],"79":[22],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[15],"95":[5],"96":[97],"98":[97],"40":[8],"25":[20],"51":[50],"99":[40],"100":[8],"101":[8],"42":[40],"11":[9,8],"102":[8],"41":[40],"103":[8],"104":[8],"105":[8],"106":[8],"107":[8],"108":[8],"109":[8],"110":[8],"111":[8],"112":[9,8],"113":[8],"114":[8],"115":[8],"116":[8],"48":[9,8],"117":[8],"118":[50],"119":[50],"120":[50],"121":[50],"122":[15],"123":[15],"124":[8],"38":[5,8],"44":[8,9],"125":[8],"126":[9,8],"127":[5],"128":[9,8],"129":[8],"130":[131],"132":[131],"133":[15],"134":[135],"136":[131]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Animation","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","FixedJoystick","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","UnityEngine.Light","UnityEngine.MeshCollider","CarController","UnityEngine.SphereCollider","UnityEngine.Rigidbody","CarAudio","CarData","PlayerController","LunaJoystick","UnityEngine.TrailRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","AIPathController","UnityEngine.BoxCollider","FinishLineColider","GameManager","Cinemachine.CinemachineVirtualCamera","MoveAndHide","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","GameOverPanel","TMPro.TextMeshProUGUI","UnityEngine.CanvasGroup","UnityEngine.UI.Button","BtnReset","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineComposer","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.57f1";

Deserializers.productName = "HotSlide";

Deserializers.lunaInitializationTime = "02/11/2025 11:00:26";

Deserializers.lunaDaysRunning = "2.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1830";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4498";

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

Deserializers.buildID = "cc0ff325-cb91-47b2-a58c-7c859e279987";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"]],[],[],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

