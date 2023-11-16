import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRefreshCwElement } from '@aracna/icons-feather-web/elements/refresh-cw-element'

export const IconFeatherRefreshCw: ElementComponent<IconFeatherRefreshCwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRefreshCwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
