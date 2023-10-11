import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHeadphonesElement } from '@aracna/icons-feather-web/elements/headphones-element'

export const IconFeatherHeadphones: ElementComponent<IconFeatherHeadphonesElement, IconProps> = createBaseElementComponent<
  IconFeatherHeadphonesElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-headphones', IconFeatherHeadphonesElement)
