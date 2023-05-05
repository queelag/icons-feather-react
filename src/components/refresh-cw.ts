import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRefreshCwElement } from '@aracna/icons-feather-web/elements/refresh-cw-element.js'

export const IconFeatherRefreshCw: ElementComponent<IconFeatherRefreshCwElement, IconProps> = createBaseElementComponent<
  IconFeatherRefreshCwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
