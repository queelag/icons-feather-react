import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherActivityElement } from '@aracna/icons-feather-web/elements/activity-element'

export const IconFeatherActivity: ElementComponent<IconFeatherActivityElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherActivityElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-activity', IconFeatherActivityElement)
