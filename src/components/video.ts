import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVideoElement } from '@aracna/icons-feather-web/elements/video-element'

export const IconFeatherVideo: ElementComponent<IconFeatherVideoElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-video', IconFeatherVideoElement)
