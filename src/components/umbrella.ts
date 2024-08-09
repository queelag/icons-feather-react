import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUmbrellaElement } from '@aracna/icons-feather-web/elements/umbrella-element'

export const IconFeatherUmbrella: ElementComponent<IconFeatherUmbrellaElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUmbrellaElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-umbrella', IconFeatherUmbrellaElement)
