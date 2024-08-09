import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRefreshCwElement } from '@aracna/icons-feather-web/elements/refresh-cw-element'

export const IconFeatherRefreshCw: ElementComponent<IconFeatherRefreshCwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRefreshCwElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
