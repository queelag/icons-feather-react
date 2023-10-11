import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherActivityElement } from '@aracna/icons-feather-web/elements/activity-element'

export const IconFeatherActivity: ElementComponent<IconFeatherActivityElement, IconProps> = createBaseElementComponent<
  IconFeatherActivityElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-activity', IconFeatherActivityElement)
