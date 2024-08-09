import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherClockElement } from '@aracna/icons-feather-web/elements/clock-element'

export const IconFeatherClock: ElementComponent<IconFeatherClockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherClockElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-clock', IconFeatherClockElement)
