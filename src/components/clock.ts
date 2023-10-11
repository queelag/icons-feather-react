import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherClockElement } from '@aracna/icons-feather-web/elements/clock-element'

export const IconFeatherClock: ElementComponent<IconFeatherClockElement, IconProps> = createBaseElementComponent<
  IconFeatherClockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-clock', IconFeatherClockElement)
