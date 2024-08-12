import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWindElement } from '@aracna/icons-feather-web/elements/wind-element'

export const IconFeatherWind: ElementComponent<IconFeatherWindElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWindElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-wind', IconFeatherWindElement)
