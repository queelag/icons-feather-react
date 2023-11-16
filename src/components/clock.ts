import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherClockElement } from '@aracna/icons-feather-web/elements/clock-element'

export const IconFeatherClock: ElementComponent<IconFeatherClockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherClockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-clock', IconFeatherClockElement)
