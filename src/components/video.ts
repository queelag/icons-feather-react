import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVideoElement } from '@aracna/icons-feather-web/elements/video-element'

export const IconFeatherVideo: ElementComponent<IconFeatherVideoElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-video', IconFeatherVideoElement)
