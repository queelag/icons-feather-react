import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTabletElement } from '@aracna/icons-feather-web/elements/tablet-element'

export const IconFeatherTablet: ElementComponent<IconFeatherTabletElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTabletElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tablet', IconFeatherTabletElement)
