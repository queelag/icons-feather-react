import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLogOutElement } from '@aracna/icons-feather-web/elements/log-out-element'

export const IconFeatherLogOut: ElementComponent<IconFeatherLogOutElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLogOutElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-log-out', IconFeatherLogOutElement)
