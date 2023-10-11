import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAirplayElement } from '@aracna/icons-feather-web/elements/airplay-element'

export const IconFeatherAirplay: ElementComponent<IconFeatherAirplayElement, IconProps> = createBaseElementComponent<
  IconFeatherAirplayElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-airplay', IconFeatherAirplayElement)
