import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherClockElement } from '@aracna/icons-feather-web/elements/clock-element'

export const IconFeatherClock: ElementComponent<IconFeatherClockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherClockElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-clock', IconFeatherClockElement)
