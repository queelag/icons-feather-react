import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAirplayElement } from '@aracna/icons-feather-web/elements/airplay-element'

export const IconFeatherAirplay: ElementComponent<IconFeatherAirplayElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAirplayElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-airplay', IconFeatherAirplayElement)
