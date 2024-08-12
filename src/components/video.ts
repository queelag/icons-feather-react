import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherVideoElement } from '@aracna/icons-feather-web/elements/video-element'

export const IconFeatherVideo: ElementComponent<IconFeatherVideoElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherVideoElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-video', IconFeatherVideoElement)
