import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHomeElement } from '@aracna/icons-feather-web/elements/home-element'

export const IconFeatherHome: ElementComponent<IconFeatherHomeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHomeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-home', IconFeatherHomeElement)
