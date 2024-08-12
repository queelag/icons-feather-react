import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherServerElement } from '@aracna/icons-feather-web/elements/server-element'

export const IconFeatherServer: ElementComponent<IconFeatherServerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherServerElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-server', IconFeatherServerElement)
