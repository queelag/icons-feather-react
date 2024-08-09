import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherActivityElement } from '@aracna/icons-feather-web/elements/activity-element'

export const IconFeatherActivity: ElementComponent<IconFeatherActivityElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherActivityElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-activity', IconFeatherActivityElement)
