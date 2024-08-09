import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCalendarElement } from '@aracna/icons-feather-web/elements/calendar-element'

export const IconFeatherCalendar: ElementComponent<IconFeatherCalendarElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCalendarElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-calendar', IconFeatherCalendarElement)
