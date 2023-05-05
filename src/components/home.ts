import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHomeElement } from '@aracna/icons-feather-web/elements/home-element.js'

export const IconFeatherHome: ElementComponent<IconFeatherHomeElement, IconProps> = createBaseElementComponent<
  IconFeatherHomeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-home', IconFeatherHomeElement)
