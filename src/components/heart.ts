import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHeartElement } from '@aracna/icons-feather-web/elements/heart-element'

export const IconFeatherHeart: ElementComponent<IconFeatherHeartElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHeartElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-heart', IconFeatherHeartElement)
