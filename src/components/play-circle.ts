import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlayCircleElement } from '@aracna/icons-feather-web/elements/play-circle-element.js'

export const IconFeatherPlayCircle: ElementComponent<IconFeatherPlayCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherPlayCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-play-circle', IconFeatherPlayCircleElement)
