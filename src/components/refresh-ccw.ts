import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRefreshCcwElement } from '@aracna/icons-feather-web/elements/refresh-ccw-element'

export const IconFeatherRefreshCcw: ElementComponent<IconFeatherRefreshCcwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRefreshCcwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-refresh-ccw', IconFeatherRefreshCcwElement)
