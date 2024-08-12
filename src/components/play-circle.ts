import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPlayCircleElement } from '@aracna/icons-feather-web/elements/play-circle-element'

export const IconFeatherPlayCircle: ElementComponent<IconFeatherPlayCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlayCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-play-circle', IconFeatherPlayCircleElement)
