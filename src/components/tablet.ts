import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTabletElement } from '@aracna/icons-feather-web/elements/tablet-element'

export const IconFeatherTablet: ElementComponent<IconFeatherTabletElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTabletElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-tablet', IconFeatherTabletElement)
