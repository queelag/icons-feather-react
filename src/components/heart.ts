import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHeartElement } from '@aracna/icons-feather-web/elements/heart-element'

export const IconFeatherHeart: ElementComponent<IconFeatherHeartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHeartElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-heart', IconFeatherHeartElement)
