import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherRefreshCcwElement } from '@aracna/icons-feather-web/elements/refresh-ccw-element'

export const IconFeatherRefreshCcw: ElementComponent<IconFeatherRefreshCcwElement, IconProps> = createBaseElementComponent<
  IconFeatherRefreshCcwElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-refresh-ccw', IconFeatherRefreshCcwElement)
