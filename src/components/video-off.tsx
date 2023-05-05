import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherVideoOffElement } from '@aracna/icons-feather-web/elements/video-off-element.js'

export const IconFeatherVideoOff: ElementComponent<IconFeatherVideoOffElement, IconProps> = createBaseElementComponent<
  IconFeatherVideoOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-video-off', IconFeatherVideoOffElement)
