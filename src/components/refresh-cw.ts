import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRefreshCwElement } from '@aracna/icons-feather-web/elements/refresh-cw-element'

export const IconFeatherRefreshCw: ElementComponent<IconFeatherRefreshCwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRefreshCwElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
