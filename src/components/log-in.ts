import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLogInElement } from '@aracna/icons-feather-web/elements/log-in-element'

export const IconFeatherLogIn: ElementComponent<IconFeatherLogInElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLogInElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-log-in', IconFeatherLogInElement)
