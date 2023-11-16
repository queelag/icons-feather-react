import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLogOutElement } from '@aracna/icons-feather-web/elements/log-out-element'

export const IconFeatherLogOut: ElementComponent<IconFeatherLogOutElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLogOutElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-log-out', IconFeatherLogOutElement)
