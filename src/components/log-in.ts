import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLogInElement } from '@aracna/icons-feather-web/elements/log-in-element'

export const IconFeatherLogIn: ElementComponent<IconFeatherLogInElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLogInElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-log-in', IconFeatherLogInElement)
