import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWindElement } from '@aracna/icons-feather-web/elements/wind-element'

export const IconFeatherWind: ElementComponent<IconFeatherWindElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWindElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wind', IconFeatherWindElement)
