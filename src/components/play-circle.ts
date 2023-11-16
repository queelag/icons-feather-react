import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPlayCircleElement } from '@aracna/icons-feather-web/elements/play-circle-element'

export const IconFeatherPlayCircle: ElementComponent<IconFeatherPlayCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPlayCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-play-circle', IconFeatherPlayCircleElement)
