import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAirplayElement } from '@aracna/icons-feather-web/elements/airplay-element'

export const IconFeatherAirplay: ElementComponent<IconFeatherAirplayElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAirplayElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-airplay', IconFeatherAirplayElement)
