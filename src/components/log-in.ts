import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLogInElement } from '@aracna/icons-feather-web/elements/log-in-element'

export const IconFeatherLogIn: ElementComponent<IconFeatherLogInElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLogInElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-log-in', IconFeatherLogInElement)
