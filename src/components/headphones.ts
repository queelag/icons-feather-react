import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHeadphonesElement } from '@aracna/icons-feather-web/elements/headphones-element'

export const IconFeatherHeadphones: ElementComponent<IconFeatherHeadphonesElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHeadphonesElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-headphones', IconFeatherHeadphonesElement)
