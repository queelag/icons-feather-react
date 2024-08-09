import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherRefreshCcwElement } from '@aracna/icons-feather-web/elements/refresh-ccw-element'

export const IconFeatherRefreshCcw: ElementComponent<IconFeatherRefreshCcwElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherRefreshCcwElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-refresh-ccw', IconFeatherRefreshCcwElement)
