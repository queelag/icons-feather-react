import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherActivityElement } from '@aracna/icons-feather-web/elements/activity-element'

export const IconFeatherActivity: ElementComponent<IconFeatherActivityElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherActivityElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-activity', IconFeatherActivityElement)
