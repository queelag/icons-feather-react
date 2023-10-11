import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCalendarElement } from '@aracna/icons-feather-web/elements/calendar-element'

export const IconFeatherCalendar: ElementComponent<IconFeatherCalendarElement, IconProps> = createBaseElementComponent<
  IconFeatherCalendarElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-calendar', IconFeatherCalendarElement)
