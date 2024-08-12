import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDeleteElement } from '@aracna/icons-feather-web/elements/delete-element'

export const IconFeatherDelete: ElementComponent<IconFeatherDeleteElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDeleteElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-delete', IconFeatherDeleteElement)
