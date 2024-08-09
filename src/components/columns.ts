import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherColumnsElement } from '@aracna/icons-feather-web/elements/columns-element'

export const IconFeatherColumns: ElementComponent<IconFeatherColumnsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherColumnsElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-columns', IconFeatherColumnsElement)
