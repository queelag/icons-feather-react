import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCalendarElement } from '@aracna/icons-feather-web/elements/calendar-element'

export const IconFeatherCalendar: ElementComponent<IconFeatherCalendarElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCalendarElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-calendar', IconFeatherCalendarElement)
